package com.carRental.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.carRental.app.Entities.Admin;
import com.carRental.app.customException.ResourceNotFoundException;
import com.carRental.app.dao.AdminRepository;
import com.carRental.app.dto.LoginDto;

@Service
@Transactional
public class AdminServiceImp implements IAdminService {

	@Autowired
	private AdminRepository adminRepo;
	
	@Override
	public Admin adminSigin(LoginDto login) {
		return adminRepo.findByEmailAndPassword(login.getEmail(), login.getPassword())
		.orElseThrow(()->new ResourceNotFoundException("Invalid Admin Credentials!!"));
		 
	}

}
