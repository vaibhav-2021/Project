package com.carRental.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carRental.app.dto.BookingDto;
import com.carRental.app.dto.CustomerDto;
import com.carRental.app.dto.FeedbackDto;
import com.carRental.app.dto.LoginDto;
import com.carRental.app.service.IAdminService;
import com.carRental.app.service.ICustomerService;
import com.carRental.app.service.IFeedbackService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/admin")
@Slf4j
public class AdminController {

	@Autowired
	private IAdminService adminServ;
	
	@Autowired
	private ICustomerService custServ;
	@Autowired
	private IFeedbackService feedbackService;
	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateAdmin(@RequestBody @Valid LoginDto admin)
	{
		log.info("Inside Authentication of Admin");
		return ResponseEntity.ok().body(adminServ.adminSigin(admin));
	}
	
	@GetMapping("/getallcustomers")
	public List<CustomerDto> getAllCustomers(){
		return custServ.getAllCustomer();
	}
	@PutMapping("/replyfeedback/{custId}/{bookingId}")
	public ResponseEntity<?> addFeedback(@RequestBody  @Valid FeedbackDto reply,@PathVariable Long custId,@PathVariable  Long bookingId){
		System.out.println(" Feedback Contoller"+custId +""+ bookingId);
		return ResponseEntity.ok().body(feedbackService.addReply(reply ,bookingId , custId));
	}
	
	@GetMapping("/getallbookings")
	public List<BookingDto> getAllBookings(){
		return adminServ.getAllBookings();
	}
}