package com.carRental.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carRental.app.Entities.CarCategory;
import com.carRental.app.Entities.Location;
import com.carRental.app.dto.BookingDto;
import com.carRental.app.dto.CustomerDto;
import com.carRental.app.dto.FeedbackDto;
import com.carRental.app.dto.LoginDto;
import com.carRental.app.dto.ReplyDto;
import com.carRental.app.service.IAdminService;
import com.carRental.app.service.ICustomerService;
import com.carRental.app.service.IFeedbackService;
import com.carRental.app.service.ILocationService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/admin")
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

	@Autowired
	private IAdminService adminServ;
	
	@Autowired
	private ICustomerService custServ;
	@Autowired
	private IFeedbackService feedbackService;
	@Autowired
	private ILocationService locserv;
	
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
	public ResponseEntity<?> addFeedback(@RequestBody  @Valid ReplyDto reply,@PathVariable Long custId,@PathVariable  Long bookingId){
		System.out.println(" Feedback Contoller"+custId +""+ bookingId);
		return ResponseEntity.ok().body(feedbackService.addReply(reply ,bookingId , custId));
	}
	
	
	
	@GetMapping("/getallbookings")
	public List<?> getAllBookings(){
		return adminServ.getAllBookings();
	}
	
	@GetMapping("/getcarcategories")
	public List<CarCategory> getAllCategories(){
		return adminServ.getAllCarCategory();
	}
	
	@GetMapping("/getalllocations")
	public List<Location> getAllLocations(){
		return locserv.getAllLocations();
	}
	@GetMapping("/getbillbyid/{bookingId}")
	public ResponseEntity<?> getBillById(@PathVariable Long bookingId){
		return ResponseEntity.ok().body(custServ.findBillByBookingId(bookingId));
	}
	
	@GetMapping("/getallfeedbacks")
	public ResponseEntity<?> getAllFeedBacks(){
		return ResponseEntity.ok().body(feedbackService.getAllFeedBacks());
	}
	
}
