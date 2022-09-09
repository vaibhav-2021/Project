package com.carRental.app.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.hibernate.validator.constraints.UniqueElements;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//PK-->cId
//Unique Keys --> email,mobileNo,drivingLic

@Entity
@Table(name = "customers_tb")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long custId;// primary Key

	@Column(length = 20)
	private String firstName;

	@Column(length = 20)
	private String lastName;

	@Column(length = 20)
	private String middleName;

	@Column(length = 100, unique = true)
	private String email;

	@Column(unique = true)
	private long mobileNo;

	@Column(length = 20)
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;

	@Column(length = 30)
	private String state;

	@Column(length = 30)
	private String district;

	@Column(length = 20)
	private String city;

	@Column(length = 6)
	private int pincode;

	@Column(length = 20, unique = true)
	private String drivingLic;

}
