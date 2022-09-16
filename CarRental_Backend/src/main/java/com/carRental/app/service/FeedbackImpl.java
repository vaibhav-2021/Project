package com.carRental.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.carRental.app.Entities.Booking;
import com.carRental.app.Entities.Customer;
import com.carRental.app.Entities.Feedback;
import com.carRental.app.customException.ResourceNotFoundException;
import com.carRental.app.dao.BookingRepository;
import com.carRental.app.dao.CustomerRepository;
import com.carRental.app.dao.FeedbacksRepository;
import com.carRental.app.dto.FeedbackDto;
import com.carRental.app.dto.ReplyDto;
@Service
@Transactional
public class FeedbackImpl implements IFeedbackService {

	@Autowired
	private FeedbacksRepository feedbackRepo;
	@Autowired
	 private ModelMapper modelMapper;
	@Autowired
	private BookingRepository bookingRepo;
	@Autowired
	private CustomerRepository customerRepo;
	
	
	@Override
	public long addFeedback(FeedbackDto feedbackDto ,Long bookingId ,Long custId) {
		System.out.println(feedbackDto);
		Feedback feedback = modelMapper.map(feedbackDto, Feedback.class);
		Booking booking = bookingRepo.findById(bookingId).orElseThrow(()->new ResourceNotFoundException("Invalid Booking Id"));
		Customer customer = customerRepo.findById(custId).orElseThrow(()->new ResourceNotFoundException("Invalid customer Id"));
		feedback.setBookingId(booking);
		feedback.setCustId(customer);
		Feedback savedfeedBack = feedbackRepo.save(feedback);
		return savedfeedBack.getFId();
	}


	@Override
	public long addReply(ReplyDto reply, Long bookingId, Long custId) {
		System.out.println( reply.getReply());
		Customer customer = customerRepo.findById(custId).orElseThrow(()->new ResourceNotFoundException("Invalid customer Id"));
		Booking booking = bookingRepo.findById(bookingId).orElseThrow(()->new ResourceNotFoundException("Invalid bookingId Id"));
		
		 Feedback feedback=  feedbackRepo.findByBookingIdAndCustId(booking,customer);
		 System.out.println(feedback);
		 //Feedback feedback= ( feedbackRepo.findByBookingIdAndCustId(bookingId,custId)).orElseThrow(()->new ResourceNotFoundException("Invalid Booking Id"));
		feedback.setReply(reply.getReply());

		Feedback savedfeedBack = feedbackRepo.save(feedback);
		return savedfeedBack.getFId();
	}


	@Override
	public List<FeedbackDto> getAllFeedBacks() {
		
		return feedbackRepo.findAll().stream().map((feedback)->modelMapper.map(feedback, FeedbackDto.class)).collect(Collectors.toList());
	}

	
}
