package com.carRental.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carRental.app.Entities.Location;

public interface LocationRepository extends JpaRepository<Location, Long> {

}
