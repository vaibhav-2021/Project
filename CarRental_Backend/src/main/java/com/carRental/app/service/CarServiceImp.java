package com.carRental.app.service;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.carRental.app.Entities.Billing;
import com.carRental.app.Entities.Booking;
import com.carRental.app.Entities.Car;
import com.carRental.app.Entities.CarCategory;
import com.carRental.app.Entities.Customer;
import com.carRental.app.Entities.Location;
import com.carRental.app.customException.ResourceNotFoundException;
import com.carRental.app.dao.BillingRepository;
import com.carRental.app.dao.BookingRepository;
import com.carRental.app.dao.CarCategoryRepository;
import com.carRental.app.dao.CarRepository;
import com.carRental.app.dao.CustomerRepository;
import com.carRental.app.dao.LocationRepository;
import com.carRental.app.dto.BookingDto;
import com.carRental.app.dto.CarDto;
@Service
@Transactional
public class CarServiceImp implements ICarService {

	@Autowired
	private CarRepository carRepo;
	@Autowired
	private CarCategoryRepository carCatRepo;
	@Autowired
	private LocationRepository locRepo;
	@Autowired
	private CustomerRepository custRepo;
	@Autowired BillingRepository billRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private BookingRepository bookRepo;
	
	@Override
	public Long AddNewCar(CarDto carDto,Long carCategoryId,Long locationId) {
		Car car=mapper.map(carDto, Car.class);
		//System.out.println("Car Cat Id"+carCatId);
		CarCategory carCategory=carCatRepo.findById(carCategoryId).orElseThrow(()->new ResourceNotFoundException("Invalid CarCategory Id"));
		Location location=locRepo.findById(locationId).orElseThrow(()->new ResourceNotFoundException("Invalid LocationId Id"));
		car.setAvailableFlag(true);
		car.setCarCategoryId(carCategory);
		car.setLocationId(location);
		Car Addedcar=carRepo.save(car);
		return Addedcar.getCarId();
	}

	@Override
	public List<Car> findAllCars() {
		return carRepo.findAll();
	}

	@Override
	public List<Car> findAvailableCars(Long locationId) {
		boolean status=true;
		Location locId1=locRepo.findById(locationId).orElseThrow(()-> new ResourceNotFoundException("Invalid Location"));
		
		return carRepo.findByLocationIdAndAvailableFlag(locId1, status);
	}

	@Override
	public Long bookCar(BookingDto bookingDto,Long custId,Long carId ) {
		
		 Customer customer = custRepo.findById(custId).orElseThrow(()-> new ResourceNotFoundException("Invalid Customer Id"));
		 Car car = carRepo.findById(carId).orElseThrow(()-> new ResourceNotFoundException("Invalid Car Id"));
		 if(car.isAvailableFlag()) {
			 Booking bookingEntity = mapper.map(bookingDto, Booking.class);
			 Period checkBookingDays = Period.between(LocalDate.now(),bookingEntity.getReturnDate());
			 int noOfBookingDays=checkBookingDays.getDays();
			 if(noOfBookingDays>=0) {
				 bookingEntity.setCarId(car);
				 bookingEntity.setCustomerId(customer);
				 bookingEntity.setPickUpDate( LocalDate.now());
				 bookingEntity.setBookingStatus("Booked");
				 
				 //get car current location id
				 Long carlocationId = car.getLocationId().getLocationId();
				 // current location id -> pick_up_loc_id
				 bookingEntity.setPickUpLocId(carlocationId);
				 //create booking
				 Booking savedBooking = bookRepo.save(bookingEntity);
				 if(savedBooking!=null) {
					
					 Period p= Period.between(bookingEntity.getPickUpDate(),bookingEntity.getReturnDate());
					 int differnce=p.getDays();
					 if(differnce==0) {
						 //if same day return than min 1 day fare will be charged
						 differnce=1;
					 }
					 double totalAmount= (differnce+1)* (car.getCarCategoryId().getCostPerDay());
					Billing billingEntity = new Billing();
					billingEntity.setActualReturnDate(bookingEntity.getReturnDate());
					billingEntity.setTotalAmount(totalAmount);
					billingEntity.setBillingStatus("Paid");
					billingEntity.setBillingDate(LocalDate.now());
					billingEntity.setBookingId(savedBooking);
					//save entry in billing table
					billRepo.save(billingEntity);
					
					//update available falg false in cars table;
					car.setAvailableFlag(false);
					carRepo.save(car);	 
				 }
				 return savedBooking.getBookingId();
			 }
			
			 } return null;
			 
				
	}

	@Override
	public Car findCarById(Long id) {
		
		return carRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Invalid Car Id"));
	}
	
	

}
