package com.carRental.app.service;

import java.util.List;

import com.carRental.app.Entities.Booking;
import com.carRental.app.Entities.Car;
import com.carRental.app.dto.CarDto;

public interface ICarService {
 Long AddNewCar(CarDto carDto,Long carCatId,Long LocId);
 List<Car> findAllCars();
 List<Car> findAvailableCars(Long locId);
 Long bookCar(Booking booking);
}
