package com.carRental.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class CarDto {

	private String registrationNo;
	private String modelName;
	private String company;
	private int modelYear;
//	private boolean availableFlag;
	private byte mileage ;
	private String modelType;
	private Long carCategoryId;
	private Long locationId;
}