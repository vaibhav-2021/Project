package com.carRental.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.carRental.app.Entities.Booking;
import com.carRental.app.Entities.Customer;
import com.carRental.app.customException.ResourceNotFoundException;
import com.carRental.app.dao.BookingRepository;
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
	private ModelMapper modelMapper;

	@Override
	public CustomerDto registerCustomer(CustomerDto customerDto) {
		Customer customer = dtoToCustomer(customerDto);

		Customer savedCustomer = custRepo.save(customer);

		return customerToDto(savedCustomer);
	}

	@Override
	public CustomerDto customerSignIn(LoginDto login) {
		Customer custEntity = custRepo.findByEmailAndPassword(login.getEmail(), login.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Credentials"));
		return modelMapper.map(custEntity, CustomerDto.class);
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

}
