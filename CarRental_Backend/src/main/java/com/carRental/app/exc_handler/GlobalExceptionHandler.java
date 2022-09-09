package com.carRental.app.exc_handler;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.carRental.app.customException.ResourceNotFoundException;
import com.carRental.app.dto.ApiResponse;

import lombok.extern.slf4j.Slf4j;
@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler  {
	
	                 
		@ExceptionHandler(ResourceNotFoundException.class)
		public ResponseEntity<?> handleResourceNotFoundException(ResourceNotFoundException e) {
			log.info("in global exception");
			System.out.println("in global exc handler : run time exc");
			return ResponseEntity.internalServerError().body(new ApiResponse(e.getMessage()));
		}
	
		// add common exc handler method : for all un chked as well as chked exception
		@ExceptionHandler(Exception.class)
		public ResponseEntity<?> handleRuntimeException(Exception e) {
			System.out.println("in global exc handler :  exc");
			return ResponseEntity.internalServerError().body(new ApiResponse(e.getMessage()));
		}
		
}
