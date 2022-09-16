package com.carRental.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.carRental.app.Entities.Booking;
import com.carRental.app.Entities.Customer;
import java.lang.String;

public interface BookingRepository extends JpaRepository<Booking,Long> {
	//all  Bookings
	//List<Booking> findByCustomerId(Customer customerId);

	//find all current Booking
	List<Booking> findByBookingStatusAndCustomerId(String bookingstatus,Customer customerId);
	//all  Old Bookings
	List<Booking> findByBookingStatusNotAndCustomerId(String bookingstatus,Customer customerId);
	@Query("select bo ,bi from Billing bi inner join bi.bookingId bo ")
	List<?> findBookingBillingLoc();
	
	@Query("select bo ,bi from Billing bi inner join bi.bookingId bo where bo.customerId=?1 and bo.bookingStatus=?2")
	List<?> findBookingBillingBycustId(Customer custId,String bookingStatus);

}
