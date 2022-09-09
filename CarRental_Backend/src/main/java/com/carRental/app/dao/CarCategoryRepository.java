package com.carRental.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carRental.app.Entities.CarCategory;

public interface CarCategoryRepository extends JpaRepository<CarCategory, Long> {

}
