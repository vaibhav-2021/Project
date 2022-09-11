package com.carRental.app.service;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.carRental.app.Entities.Billing;
import com.carRental.app.Entities.Booking;
import com.carRental.app.Entities.Car;
import com.carRental.app.Entities.Customer;
import com.carRental.app.customException.ResourceNotFoundException;
import com.carRental.app.dao.BillingRepository;
import com.carRental.app.dao.BookingRepository;
import com.carRental.app.dao.CarRepository;
import com.carRental.app.dao.CustomerRepository;
import com.carRental.app.dto.BookingDto;
import com.carRental.app.dto.CustomerDto;
import com.carRental.app.dto.LoginDto;

@Service
@Transactional
public class CustomerService implements ICustomerService {

	@Autowired
	private CustomerRepository custRepo;
	@Autowired
	private BookingRepository bookingRepo;
	
	@Autowired
	private BillingRepository billRepo;
	@Autowired
	private CarRepository carRepo;

	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	public static final  int FINE=500;

	@Override
	public CustomerDto registerCustomer(CustomerDto customerDto) {
		Customer customer = dtoToCustomer(customerDto);
        customer.setPassword(passwordEncoder.encode(customerDto.getPassword()));
		Customer savedCustomer = custRepo.save(customer);

		return customerToDto(savedCustomer);
	}

	@Override
	public CustomerDto customerSignIn(LoginDto login) {
		System.out.println("Password "+passwordEncoder.encode(login.getPassword()));
		Customer customer=custRepo.findByEmail(login.getEmail());
//		Customer custEntity = custRepo.findByEmailAndPassword(login.getEmail(), passwordEncoder.matches(login.getPassword(),customer.getPassword()))
//				.orElseThrow(() -> new ResourceNotFoundException("Invalid Credentials"));
		if(passwordEncoder.matches(login.getPassword(),customer.getPassword())) {
			return modelMapper.map(customer, CustomerDto.class);
		}
		return null;
		
	}

	@Override
	public List<CustomerDto> getAllCustomer() {

		List<Customer> customersList = custRepo.findAll();
		List<CustomerDto> customerDtoList = customersList.stream().map((customer) -> customerToDto(customer))
				.collect(Collectors.toList());
		return customerDtoList;
	}

	@Override
	public CustomerDto updateProfile(CustomerDto CustomerDto, Long custId) {
		// System.out.println(custRepo.findById(detachedCustomer.getCustId()));
		Customer customer = dtoToCustomer(CustomerDto);
		customer.setCustId(custId);
		custRepo.findById(custId).orElseThrow(() -> new ResourceNotFoundException("Invalid Customer!!"));
		return customerToDto(custRepo.save(customer));
	}

	@Override
	public List<BookingDto> getOldBookings(Long customerId) {

		Customer customer = custRepo.findById(customerId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Customer!!"));
		String bookingstatus = "Booked";
		List<Booking> bookingList = bookingRepo.findByBookingStatusNotAndCustomerId(bookingstatus, customer);
		List<BookingDto> bookingsDtoList = bookingList.stream()
				.map((booking) -> modelMapper.map(booking, BookingDto.class)).collect(Collectors.toList());
		// System.out.println(bookingList);
		return bookingsDtoList;
	}

	@Override
	public List<BookingDto> getCurrentBookings(Long customerId) {
		Customer customer = custRepo.findById(customerId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Customer!!"));
		//System.out.println(customer);
		String bookingstatus = "Booked";
		List<Booking> bookingList = bookingRepo.findByBookingStatusAndCustomerId(bookingstatus, customer);
		List<BookingDto> bookingsDtoList = bookingList.stream()
				.map((booking) -> modelMapper.map(booking, BookingDto.class)).collect(Collectors.toList());
		//System.out.println(bookingList);
		return bookingsDtoList;
	}

	public Customer dtoToCustomer(CustomerDto customerDto) {
		return modelMapper.map(customerDto, Customer.class);
	}

	public CustomerDto customerToDto(Customer customer) {
		return modelMapper.map(customer, CustomerDto.class);
	}

	@Override
	public String cancelCarBooking(Long bookingId) {
		Booking booking = bookingRepo.findById(bookingId).orElseThrow(() -> new ResourceNotFoundException("Invalid Booking Id!!"));
		Period checkCancelPeriod= Period.between(booking.getPickUpDate(),LocalDate.now());
		if(checkCancelPeriod.getDays()<= 0){
			booking.setBookingStatus("Cancelled And Refunded");
			
			bookingRepo.save(booking);
			
		Billing bill=  billRepo.findByBookingId(booking).orElseThrow(() -> new ResourceNotFoundException("Invalid Billing Id!!"));
			bill.setBillingStatus("Cancelled");
			bill.setTotalAmount(0);
			
			billRepo.save(bill);
			
			Car car = carRepo.findById(booking.getCarId().getCarId()).orElseThrow(() -> new ResourceNotFoundException("Invalid Car Id!!"));
			car.setAvailableFlag(true);
			carRepo.save(car);
			
		return "Booking cancelled ";
		
		}else
			return "Car Cancellation period is over";
			
	}

	@Override
	public String submitCar(Long bookingId) {
		Booking booking = bookingRepo.findById(bookingId).orElseThrow(() -> new ResourceNotFoundException("Invalid Booking Id!!"));
		booking.setBookingStatus("Submited");
		booking.setReturnDate(LocalDate.now());
		//booking table updated 
		bookingRepo.save(booking);
		
		Billing bill=  billRepo.findByBookingId(booking).orElseThrow(() -> new ResourceNotFoundException("Invalid Billing Id!!"));
		 Period p= Period.between(bill.getActualReturnDate(),LocalDate.now());
		 
		 if(p.getDays()>0) {
			 double lateFee= p.getDays()*FINE ;
			 bill.setLateFees(lateFee);
			 bill.setTotalAmount(bill.getTotalAmount()+lateFee);
			 bill.setBillingDate(LocalDate.now());
		 }
		 
		 bill.setActualReturnDate(LocalDate.now());
		 billRepo.save(bill);
		 
		 Car car = carRepo.findById(booking.getCarId().getCarId()).orElseThrow(() -> new ResourceNotFoundException("Invalid Car Id!!"));
			car.setAvailableFlag(true);
			carRepo.save(car);
		 
		return "Car Submited";
		
	}

	
	
}
