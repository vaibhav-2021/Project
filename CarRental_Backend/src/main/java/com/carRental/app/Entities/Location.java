package com.carRental.app.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/*
 * 
Create table Locations_Tb (Location_id int primary key auto_increment, Street Varchar(20), 
State Varchar(20),District varchar(20),
City varchar(20),Pincode int)auto_increment=1000;
 */

@Entity
@Table(name = "locations_tb")

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Location {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long locationId;
	@Column(length = 20)
	private String street;
	@Column(length = 20)
	private String locationName;
	@Column(length = 30)
	private String state;
	@Column(length = 20)
	private String district;
	@Column(length = 20)
	private String city;
	@Column(length = 6)
	private int pincode;
}
