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

/*
 * Create Table Bill_Tb(Bill_id int primary key auto_increment, Booking_id int, Amount double,
Actual_ReturnDate date default(CURRENT_DATE), Late_fees double, Billing_status varchar(10),
Billing_Date_time timeStamp default current_timeStamp,
 foreign key(booking_id) references booking_tb(booking_id) on delete cascade on update cascade)
  AUTO_INCREMENT = 100;
 
 */

@Entity
@Table(name = "billings_tb")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@ToString(exclude ="bookingId")
public class Billing {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long billId;
	
	private double totalAmount;
	private LocalDate actualReturnDate;
	private double lateFees;
	@Column(length =10) 
	private String billingStatus;
	private LocalDate billingDate;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "booking_Id",nullable = false)
	//@MapsId
	private Booking bookingId;
	
}
