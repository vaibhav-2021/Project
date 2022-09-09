package com.carRental.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.carRental.app.Entities.CarCategory;
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

}
