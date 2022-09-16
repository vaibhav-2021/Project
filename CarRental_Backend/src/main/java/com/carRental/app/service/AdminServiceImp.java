package com.carRental.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.carRental.app.Entities.Admin;
import com.carRental.app.Entities.Booking;
import com.carRental.app.Entities.CarCategory;
import com.carRental.app.Entities.Customer;
import com.carRental.app.customException.ResourceNotFoundException;
import com.carRental.app.dao.AdminRepository;
import com.carRental.app.dao.BookingRepository;
import com.carRental.app.dao.CarCategoryRepository;
import com.carRental.app.dao.CustomerRepository;
import com.carRental.app.dto.BookingDto;
import com.carRental.app.dto.LoginDto;

@Service
@Transactional
public class AdminServiceImp implements IAdminService {

	@Autowired
	private AdminRepository adminRepo;
	
	@Autowired
	private CustomerRepository custRepo;
	@Autowired
	private BookingRepository bookingRepo;

	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private CarCategoryRepository carCatRepo;
	
	
	@Override
	public Admin adminSigin(LoginDto login) {
		return adminRepo.findByEmailAndPassword(login.getEmail(), login.getPassword())
		.orElseThrow(()->new ResourceNotFoundException("Invalid Admin Credentials!!"));
		 
	}
	@Override
	public List<?> getAllBookings() {

		//String bookingstatus = "Booked";
//		List<?> bookingList = bookingRepo.findBookingBillingLoc();
//		List<BookingDto> bookingsDtoList = bookingList.stream()
//				.map((booking) -> modelMapper.map(booking, BookingDto.class)).collect(Collectors.toList());
//		// System.out.println(bookingList);
		return bookingRepo.findBookingBillingLoc();
	}
	@Override
	public List<CarCategory> getAllCarCategory() {
		return carCatRepo.findAll();
	}
	

}
