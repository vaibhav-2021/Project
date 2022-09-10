package com.carRental.app.service;

import java.util.List;

import com.carRental.app.Entities.Admin;
import com.carRental.app.dto.BookingDto;
import com.carRental.app.dto.LoginDto;

public interface IAdminService {
	Admin adminSigin(LoginDto login);
	List<BookingDto> getAllBookings();
}
