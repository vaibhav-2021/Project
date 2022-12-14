package com.carRental.app.controller;

import java.time.LocalDate;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carRental.app.dto.ApiResponse;
import com.carRental.app.dto.BookingDto;
import com.carRental.app.dto.CustomerDto;
import com.carRental.app.dto.FeedbackDto;
import com.carRental.app.dto.LoginDto;
import com.carRental.app.service.ICarCategoryService;
import com.carRental.app.service.ICarService;
import com.carRental.app.service.ICustomerService;
import com.carRental.app.service.IFeedbackService;
import com.carRental.app.service.ILocationService;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "*")

public class CustomerController {

	@Autowired
	private ICustomerService custService;
	@Autowired
	private IFeedbackService feedbackService;
	@Autowired
	private ICarService carService;
	@Autowired
	private ILocationService locServ;
	@Autowired
	private ICarCategoryService carCatServ;

	//Add new Customer
	@PostMapping("/add")
	public ResponseEntity<?> resgisterCustomer(@RequestBody @Valid CustomerDto customerDto) {
		
		return ResponseEntity.status(HttpStatus.CREATED).body(custService.registerCustomer(customerDto));

	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateCust(@RequestBody @Valid LoginDto loginDto){
		//System.out.println(custService.customerSignIn(customer));
		CustomerDto customerSignIn = custService.customerSignIn(loginDto);
		if(customerSignIn!=null) {
			return ResponseEntity.ok().body(customerSignIn);
		}
		return ResponseEntity.internalServerError().body(new ApiResponse("Invalid Credentials"));
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
	
	@PostMapping("/booking/{custId}/{carId}")
	public ResponseEntity<?> carBooking(@RequestBody  @Valid BookingDto bookingDto,@PathVariable Long custId,@PathVariable  Long carId){
		Long bookinId = carService.bookCar(bookingDto, custId, carId);
		if(bookinId!=null) {
			return ResponseEntity.ok().body(bookinId);

		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body( new ApiResponse("Car Not Available for Booking") ); 	
	}
	
	@PutMapping("/cancelbooking/{bookingid}")
	public ResponseEntity<?> cancelBooking(@PathVariable Long bookingid ){
		return ResponseEntity.ok().body(custService.cancelCarBooking(bookingid));
	}
	
	@PutMapping("/submitcar/{bookingid}")
	public ResponseEntity<?> submitCar(@PathVariable Long bookingid ){
		return ResponseEntity.ok().body(custService.submitCar(bookingid));
	}
	
	@GetMapping("/getcustomer/{custId}")
	public ResponseEntity<?> getCustomerById(@PathVariable Long custId){
		return ResponseEntity.ok().body(custService.getCutomerById(custId));
	}
	@GetMapping("/getcarbyid/{carId}")
	public ResponseEntity<?> getCarById(@PathVariable Long carId){
		return ResponseEntity.ok().body(carService.findCarById(carId));
	}
	@PostMapping("/getTotalAmount/{costPerDay}")
	public ResponseEntity<?> getCarById(@PathVariable Long costPerDay, @RequestBody BookingDto date ){
		
		return ResponseEntity.ok().body(custService.getTotalAmount(costPerDay,date.getReturnDate()));
	}
	@GetMapping("/getlocationbyid/{id}")
	public ResponseEntity<?> findLocationById(@PathVariable Long id) {
		return ResponseEntity.status(HttpStatus.CREATED).body(locServ.findByLocationId(id));
	}
	
	@GetMapping("/getcarcatbyid/{id}")
	public ResponseEntity<?> findCarCatById(@PathVariable Long id) {
		return ResponseEntity.status(HttpStatus.CREATED).body(carCatServ.findCatById(id));
	}
	
	@GetMapping("/getbookingbyid/{id}")
	public ResponseEntity<?> findBookingById(@PathVariable Long id) {
		return ResponseEntity.status(HttpStatus.CREATED).body(custService.getBookingById(id));
	}
	
	

}

