package com.carRental.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carRental.app.Entities.Admin;


public interface AdminRepository extends JpaRepository<Admin, Long>{

	Optional<Admin> findByEmailAndPassword(String email,String password);
}
