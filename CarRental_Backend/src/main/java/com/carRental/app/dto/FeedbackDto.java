package com.carRental.app.dto;

import org.hibernate.validator.constraints.Range;

import com.carRental.app.Entities.Booking;
import com.carRental.app.Entities.Customer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class FeedbackDto {


	private String message;
	
	
	private String reply;

	@Range( max=5, min = 1)
	private int rating;
	
	private Booking bookingId;
	
	private Customer custId;
}
