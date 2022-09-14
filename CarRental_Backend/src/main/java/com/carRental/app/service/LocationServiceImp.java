package com.carRental.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.carRental.app.Entities.Location;
import com.carRental.app.customException.ResourceNotFoundException;
import com.carRental.app.dao.LocationRepository;
@Service
@Transactional
public class LocationServiceImp implements ILocationService {

	@Autowired
	private LocationRepository locRepo;
	
	@Override
	public Long addLocation(Location location) {
		Location newLoc= locRepo.save(location);
		return newLoc.getLocationId();
	}

	@Override
	public List<Location> getAllLocations() {
		
		return locRepo.findAll();
	}

	@Override
	public Location findByLocationId(Long id) {
	Location location = locRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid Location Id") );
		return location;
	}
	

}
