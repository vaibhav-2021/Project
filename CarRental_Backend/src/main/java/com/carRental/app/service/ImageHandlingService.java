package com.carRental.app.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.carRental.app.Entities.Car;

public interface ImageHandlingService {

	Car uploadImage(Long carId,MultipartFile image ) throws IOException ;
	
}
