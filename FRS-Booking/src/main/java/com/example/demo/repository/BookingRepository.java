package com.example.demo.repository;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

	public List<Booking> findByUid(Long uid);
}
