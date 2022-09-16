package com.carRental.app.service;

import java.util.List;

import com.carRental.app.dto.FeedbackDto;
import com.carRental.app.dto.ReplyDto;

public interface IFeedbackService {
	long addFeedback(FeedbackDto feedbackDto ,Long bookingId ,Long custId);

	long addReply (ReplyDto reply ,Long bookingId ,Long custId);
	
	List<FeedbackDto> getAllFeedBacks();

}
