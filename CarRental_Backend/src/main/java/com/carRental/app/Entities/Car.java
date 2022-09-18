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
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/*
 * create table Cars_Tb (Registration_No varchar(20) primary key,Model_name varchar(20),
 * Company varchar(20),
Year int,Car_Category varchar(20),Available_Flag varchar(8), Location_id int ,
Milage int,Model_type varchar(10),

 */

@Entity
@Table(name = "cars_tb")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString()

public class Car {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private Long carId;//Primary key
	
	@Column(length = 20,unique = true)
	private String registrationNo;
	
	@Column(length =20)
	private String modelName;
	
	@Column(length =20)
	private String company;
	
	@Column(length =4)
	private int modelYear;
	
	private boolean availableFlag;
	

	@Column(length =2)
	private byte milage;
	
	@Column(length =20)
	private String modelType;
	
	
	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	@JoinColumn(name = "car_Category_Id",nullable = false)
	private CarCategory carCategoryId;
	
	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	@JoinColumn(name = "location_Id",nullable = false)
	private Location locationId;
	
	private String carImage;

}
