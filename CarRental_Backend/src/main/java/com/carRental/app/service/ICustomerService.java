package com.carRental.app.service;

import java.util.List;

import com.carRental.app.dto.BookingDto;
import com.carRental.app.dto.CustomerDto;
import com.carRental.app.dto.LoginDto;

public interface ICustomerService {
 CustomerDto registerCustomer(CustomerDto customerDto);
 CustomerDto customerSignIn(LoginDto login);
 List<CustomerDto> getAllCustomer();
 CustomerDto updateProfile(CustomerDto CustomerDto,Long custId);
 List<BookingDto> getOldBookings(Long customerId);
 List<BookingDto> getCurrentBookings(Long customerId);
}
