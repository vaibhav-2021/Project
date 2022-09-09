package com.carRental.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carRental.app.dto.CustomerDto;
import com.carRental.app.dto.FeedbackDto;
import com.carRental.app.dto.LoginDto;
import com.carRental.app.service.ICustomerService;
import com.carRental.app.service.IFeedbackService;

@RestController
@RequestMapping("/customer")

public class CustomerController {

	@Autowired
	private ICustomerService custService;
	@Autowired
	private IFeedbackService feedbackService;

	//Add new Customer
	@PostMapping("/add")
	public ResponseEntity<?> resgisterCustomer(@RequestBody @Valid CustomerDto customerDto) {
		
		return ResponseEntity.status(HttpStatus.CREATED).body(custService.registerCustomer(customerDto));

	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateCust(@RequestBody @Valid LoginDto loginDto){
		//System.out.println(custService.customerSignIn(customer));
		return ResponseEntity.ok().body(custService.customerSignIn(loginDto));
	}
	
	@PutMapping("/update/{custId}")
	public ResponseEntity<?> updateProfile(@RequestBody @Valid CustomerDto customerDto,@PathVariable Long custId){
		return ResponseEntity.ok().body(custService.updateProfile(customerDto, custId));
	}
	
	@PostMapping("/addfeedback/{custId}/{bookingId}")
	public ResponseEntity<?> addFeedback(@RequestBody  @Valid FeedbackDto TransFeedbackDto,@PathVariable Long custId,@PathVariable  Long bookingId){
		System.out.println(" Feedback Contoller"+custId +""+ bookingId);
		return ResponseEntity.ok().body(feedbackService.addFeedback(TransFeedbackDto ,bookingId , custId));
	}
	
	@GetMapping("/getoldbookings/{custId}")
	public ResponseEntity<?> getOldBookings(@PathVariable Long custId){
		//System.out.println("Inside Contoller"+custService.getAllBookings(custId));
		return ResponseEntity.ok().body(custService.getOldBookings(custId));
	}
	
	@GetMapping("/getcurrentbookings/{custId}")
	public ResponseEntity<?> getCurrentBookings(@PathVariable Long custId){
		//System.out.println("Inside Contoller"+custService.getAllBookings(custId));
		return ResponseEntity.ok().body(custService.getCurrentBookings(custId));
	}

}

