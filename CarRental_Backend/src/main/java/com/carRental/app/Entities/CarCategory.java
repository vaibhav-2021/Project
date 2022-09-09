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

//create table Car_Category_Tb ( Car_Category varchar(20) primary key, Seats int, Cost_Per_Day double);

@Entity
@Table(name = "car_category_tb")

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class CarCategory {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long carCategoryId;//primary key
	@Column(length = 20)
	private String carCategoryName;
	@Column(length = 15 )
	private byte seat;
	
	private double costPerDay;
}
