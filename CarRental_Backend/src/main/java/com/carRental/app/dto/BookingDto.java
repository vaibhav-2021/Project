package com.carRental.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.Future;

import com.carRental.app.Entities.Car;
import com.carRental.app.Entities.Customer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BookingDto {
	
	private Long bookingId;
    
	private LocalDate pickUpDate;
//	@Future(message = "Invalid Return Date!!!")
	private LocalDate returnDate;
	
	private Long pickUpLocId;
	
	private Long dropLocId;
	
	private String bookingStatus;
	
	private Car carId;
	
	private Customer customerId;

}
