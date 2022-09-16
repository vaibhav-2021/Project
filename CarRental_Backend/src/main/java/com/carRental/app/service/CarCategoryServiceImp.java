package com.carRental.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.carRental.app.Entities.CarCategory;
import com.carRental.app.customException.ResourceNotFoundException;
import com.carRental.app.dao.CarCategoryRepository;
@Service
@Transactional
public class CarCategoryServiceImp implements ICarCategoryService {

	@Autowired
	private CarCategoryRepository carCatRepo;
	
	@Override
	public Long addCategory(CarCategory category) {
		CarCategory carCat=carCatRepo.save(category);
		return carCat.getCarCategoryId();
	}

	@Override
	public CarCategory findCatById(Long catId) {
	  CarCategory category = carCatRepo.findById(catId).orElseThrow(()-> new ResourceNotFoundException("Invalid Car Cat Id"));
		System.out.println(category);
		return category;
	}
	

}
