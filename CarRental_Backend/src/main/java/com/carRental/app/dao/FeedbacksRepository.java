package com.carRental.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carRental.app.Entities.Booking;
import com.carRental.app.Entities.Customer;
import com.carRental.app.Entities.Feedback;

public interface FeedbacksRepository extends JpaRepository<Feedback, Long> {

	Feedback findByBookingIdAndCustId(Booking bookingId , Customer custId);
 

}
