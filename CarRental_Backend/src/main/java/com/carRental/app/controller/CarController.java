package com.carRental.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.carRental.app.Entities.Car;
import com.carRental.app.dto.CarDto;
import com.carRental.app.service.ICarService;

@RestController

public class CarController {

	@Autowired
	private ICarService carServ;
	
	@PostMapping("/admin/addcar")
	public ResponseEntity<?> addCar(@RequestBody CarDto newCar){
		System.out.println(newCar);
	return ResponseEntity.status(HttpStatus.CREATED).body(carServ.AddNewCar(newCar,newCar.getCarCategoryId(),newCar.getLocationId()));
	}
	@GetMapping("/admin/getallcars")
	public List<Car> getAllCars(){
		return carServ.findAllCars();
	}
	
	@GetMapping("/customer/getavailablecars/{locId}")
	public List<Car> getAvailableCar(@PathVariable Long locId){
		return carServ.findAvailableCars(locId);
	}
	
	
}
