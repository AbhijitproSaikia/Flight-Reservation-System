package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.BookingDto;
import com.example.demo.entity.Booking;

public interface BookingService {
	
	public BookingDto addBooking(BookingDto bookingDto);
	public List<Booking> findByUid(Long uid);
//	public BookingDto findbyBooking_id(Long booking_id);
	public BookingDto updateBooking(long booking_id,Booking booking);
	public List<BookingDto> getAllBookings();
	public String deleteBooking(Long booking_id);
}
