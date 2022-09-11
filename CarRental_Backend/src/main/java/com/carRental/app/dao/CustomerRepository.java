package com.carRental.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carRental.app.Entities.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
 
	
	Optional<Customer> findByEmailAndPassword(String email,String password);

	Customer findByEmail(String email);
	
	
}
