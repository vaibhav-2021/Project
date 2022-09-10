package com.carRental.app.Entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name = "bookings_tb")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude ={"carId","customerId"} )

public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long bookingId;
    
	private LocalDate pickUpDate;
	private LocalDate returnDate;
	
	private Long pickUpLocId;
	private Long dropLocId;
	@Column(length =30)
	private String bookingStatus;
	
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "car_Id",nullable = false)
	
	private Car carId;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "cust_Id",nullable = false)
	
	private Customer customerId;
}
