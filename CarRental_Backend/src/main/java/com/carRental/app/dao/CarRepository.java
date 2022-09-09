package com.carRental.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carRental.app.Entities.Car;
import com.carRental.app.Entities.Location;

public interface CarRepository extends JpaRepository<Car,Long> {

	
	List<Car> findByLocationIdAndAvailableFlag(Location locId,boolean status);
}
