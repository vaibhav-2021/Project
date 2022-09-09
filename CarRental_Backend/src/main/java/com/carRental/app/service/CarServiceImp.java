package com.carRental.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.carRental.app.Entities.Booking;
import com.carRental.app.Entities.Car;
import com.carRental.app.Entities.CarCategory;
import com.carRental.app.Entities.Location;
import com.carRental.app.customException.ResourceNotFoundException;
import com.carRental.app.dao.BookingRepository;
import com.carRental.app.dao.CarCategoryRepository;
import com.carRental.app.dao.CarRepository;
import com.carRental.app.dao.LocationRepository;
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
	public Long bookCar(Booking booking) {
		
		
		return null;
	}
	
	

}
