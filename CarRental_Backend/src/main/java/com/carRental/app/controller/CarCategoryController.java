package com.carRental.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.carRental.app.Entities.CarCategory;
import com.carRental.app.service.ICarCategoryService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CarCategoryController {

	@Autowired
	private ICarCategoryService carCatServ;
	
	@PostMapping("/admin/addcategory")
	public ResponseEntity<?> addCategory(@RequestBody CarCategory category) {
		return ResponseEntity.status(HttpStatus.CREATED).body(carCatServ.addCategory(category));
	}
}
