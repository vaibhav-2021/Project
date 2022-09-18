package com.carRental.app.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.carRental.app.Entities.Car;
import com.carRental.app.dto.CarDto;
import com.carRental.app.service.ICarService;
import com.carRental.app.service.ImageHandlingService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class CarController {

	@Autowired
	private ICarService carServ;
	@Autowired
	private ImageHandlingService imgServ;
	
	@PostMapping("/admin/addcar")
	public ResponseEntity<?> addCar(@RequestBody CarDto newCar){
		System.out.println(newCar);
	return ResponseEntity.status(HttpStatus.CREATED).body(carServ.AddNewCar(newCar,newCar.getCarCategoryId(),newCar.getLocationId()));
	}
	@GetMapping("/admin/getallcars")
	public List<Car> getAllCars(){
		return carServ.findAllCars();
	}
	
	@GetMapping(value = "/customer/getavailablecars/{locId}",produces = {})
	public ResponseEntity<?> getAvailableCar(@PathVariable Long locId) throws IOException{
		return ResponseEntity.ok(carServ.findAvailableCars(locId).toArray());
	}
	
	
	@PostMapping("/{carId}/image")
	public ResponseEntity<?> uploadImage(@PathVariable Long carId,@RequestParam MultipartFile imageFile) throws IOException {
		return ResponseEntity.status(HttpStatus.CREATED).body(imgServ.uploadImage(carId, imageFile));
	}
	@GetMapping(value = "/customer/{carId}",produces = {
			MediaType.IMAGE_GIF_VALUE,
			MediaType.IMAGE_JPEG_VALUE,
			MediaType.IMAGE_PNG_VALUE
	})
	public ResponseEntity<?> getCarImageById(@PathVariable Long carId) throws IOException{
		return ResponseEntity.ok(carServ.getCarImageById(carId));
	}
	
	
}
