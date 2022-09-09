package com.carRental.app.service;

import com.carRental.app.Entities.Admin;
import com.carRental.app.dto.LoginDto;

public interface IAdminService {
	Admin adminSigin(LoginDto login);
}
