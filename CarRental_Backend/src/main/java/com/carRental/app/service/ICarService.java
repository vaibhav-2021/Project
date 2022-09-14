package com.carRental.app.service;

import java.util.List;

import com.carRental.app.Entities.Car;
import com.carRental.app.dto.BookingDto;
import com.carRental.app.dto.CarDto;

public interface ICarService {
 Long AddNewCar(CarDto carDto,Long carCatId,Long LocId);
 List<Car> findAllCars();
 List<Car> findAvailableCars(Long locId);
 Long bookCar(BookingDto bookingDto,Long carId,Long custId);
 Car findCarById(Long id);
}
