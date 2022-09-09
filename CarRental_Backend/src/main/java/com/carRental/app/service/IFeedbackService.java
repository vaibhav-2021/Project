package com.carRental.app.service;

import com.carRental.app.dto.FeedbackDto;

public interface IFeedbackService {
	long addFeedback(FeedbackDto feedbackDto ,Long bookingId ,Long custId);

	long addReply (FeedbackDto reply ,Long bookingId ,Long custId);

}
