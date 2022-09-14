package com.carRental.app.service;

import java.util.List;

import com.carRental.app.Entities.Location;

public interface ILocationService {

	Long addLocation (Location location);
	List<Location> getAllLocations();
	Location findByLocationId(Long id);
}
