package com.carRental.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.carRental.app.Entities.Location;
import com.carRental.app.service.ILocationService;

@RestController
@CrossOrigin(origins = "*")
public class LocationController {

	@Autowired
	private ILocationService locServ;
	
	@PostMapping("/admin/addlocation")
	public ResponseEntity<?> addLocation(@RequestBody Location loc) {
		return ResponseEntity.status(HttpStatus.CREATED).body(locServ.addLocation(loc));
	}
	@GetMapping("/admin/getlocationbyid/{id}")
	public ResponseEntity<?> findLocationById(@PathVariable Long id) {
		return ResponseEntity.status(HttpStatus.CREATED).body(locServ.findByLocationId(id));
	}
}
