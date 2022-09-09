package com.carRental.app.Entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name = "feedbacks_tb",uniqueConstraints = @UniqueConstraint(columnNames = {"booking_Id","cust_Id"} ))

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = {"bookingId","custId"})
public class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long fId;
	@Column(length = 200)
	private String message;
	@Column(length = 200)
	private String reply;
	@Column(length = 5)
	private int rating;
	
	@OneToOne(fetch = FetchType.EAGER ,cascade=CascadeType.ALL)
	@JoinColumn(name = "booking_Id",nullable = false)
	//@MapsId
	@JsonProperty(value = "bookingId")
	private Booking bookingId;
	
	@ManyToOne(fetch = FetchType.EAGER,cascade=CascadeType.ALL)
	@JoinColumn(name = "cust_id",nullable = false)
	@JsonProperty(value = "custId")
	private Customer custId;
	
}
