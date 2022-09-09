package com.carRental.app.customException;


	public class ResourceNotFoundException extends RuntimeException {
		public ResourceNotFoundException(String mesg) {
			super(mesg);
		}
	}

