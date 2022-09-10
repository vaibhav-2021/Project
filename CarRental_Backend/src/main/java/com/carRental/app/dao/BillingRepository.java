package com.carRental.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carRental.app.Entities.Billing;
import com.carRental.app.Entities.Booking;

public interface BillingRepository  extends JpaRepository<Billing, Long>{
	Optional<Billing> findByBookingId(Booking bookingId);
}
