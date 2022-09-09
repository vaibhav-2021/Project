package com.carRental.app.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude ="password")
public class CustomerDto {

	private Long custId;
	@NotBlank(message = "First Name must be supplied")
	@Length(min = 2,max=20,message = "Invalid length of chars for  first name")
	private String firstName;

	@NotBlank(message = "Last Name must be supplied")
	private String lastName;

	@NotBlank(message = "Middle Name must be supplied")
	private String middleName;

	@NotBlank(message = "Email must be supplied ...")
	@Email(message = "Invalid Email Format")
	private String email;

	//@NotBlank(message = "Mobile must be supplied ...")
	//@Length(min = 10,max = 13 ,message = "Invalid length for Mobile No ")
	private long mobileNo;

	@Pattern(regexp="((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message = "Blank or invalid password")
	@JsonProperty(access =Access.WRITE_ONLY)
	private String password;

	@NotBlank(message = "State must be supplied ...")
	private String state;

	@NotBlank(message = "Dist must be supplied ...")
	private String district;

	@NotBlank(message = "City must be supplied ...")
	private String city;

	//@NotBlank(message = "Pincode must be supplied ...")
	//@Length(min = 6,max = 6 ,message = "Invalid length for PinCode ")
	private int pincode;
	@NotBlank(message = "DrivingLic must be supplied ...")
	//@Length(min = 15,max = 15 ,message = "Invalid length for DrivLic ")
	private String drivingLic;
}
