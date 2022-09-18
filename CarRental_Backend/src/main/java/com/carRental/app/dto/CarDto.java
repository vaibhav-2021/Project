package com.carRental.app.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

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
	private byte milage ;
	private String modelType;
	private Long carCategoryId;
	private Long locationId;
	
	@JsonProperty(access = Access.READ_ONLY)
	private String carImage;
}
