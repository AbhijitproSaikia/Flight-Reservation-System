package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.BookingDto;
import com.example.demo.entity.Booking;
import com.example.demo.repository.BookingRepository;

@Service
public class BookingServiceImpl implements BookingService {
	
	@Autowired
	BookingRepository bookingRepository;

	@Override
	public BookingDto addBooking(BookingDto bookingDto) {
		return convertToDto(bookingRepository.save(convertToEntity(bookingDto)));
	}

	@Override
	public List<Booking> findByUid(Long uid) {
		List<Booking> bookings = bookingRepository.findByUid(uid);
		return bookings;
	}

	
	@Override
	public BookingDto updateBooking(long booking_id, Booking booking) {
		
		Booking booking1= bookingRepository.findById(booking_id).orElseThrow();
		
		booking1.setUid(booking.getUid());
		booking1.setFlight_id(booking.getFlight_id());
		booking1.setPassenger_name(booking.getPassenger_name());
		booking1.setPassenger_age(booking.getPassenger_age());
		booking1.setPassenger_gender(booking.getPassenger_gender());
		booking1.setSource(booking.getSource());
		booking1.setDeparture_time(booking.getDeparture_time());
		booking1.setDestination(booking.getDestination());
		booking1.setArrival_time(booking.getArrival_time());
		booking1.setFlight_date(booking.getFlight_date());
		booking1.setFlight_duration(booking.getFlight_duration());
		booking1.setPlane_name(booking.getPlane_name());
		booking1.setPrice(booking.getPrice());
		booking1.setBooked_at(booking.getBooked_at());
		
		return convertToDto(bookingRepository.save(booking1));
	}

	@Override
	public List<BookingDto> getAllBookings() {
		List<Booking> bookings=bookingRepository.findAll();
		List<BookingDto> bookingDtos = new ArrayList<BookingDto>();
		for(Booking booking :bookings)
		{
			bookingDtos.add(convertToDto(booking));
		}
		return bookingDtos;
	}

	@Override
	public String deleteBooking(Long booking_id) {
		
		Booking booking=bookingRepository.findById(booking_id).orElseThrow();
		bookingRepository.delete(booking);
		return "deletion successfull" ;
	}

	
	private BookingDto convertToDto(Booking booking)
	{
		BookingDto bookingDto = new BookingDto();
		
		bookingDto.setBooking_id(booking.getBooking_id());
		bookingDto.setUid(booking.getUid());
		bookingDto.setFlight_id(booking.getFlight_id());
		bookingDto.setPassenger_name(booking.getPassenger_name());
		bookingDto.setPassenger_age(booking.getPassenger_age());
		bookingDto.setPassenger_gender(booking.getPassenger_gender());
		bookingDto.setSource(booking.getSource());
		bookingDto.setDeparture_time(booking.getDeparture_time());
		bookingDto.setDestination(booking.getDestination());
		bookingDto.setArrival_time(booking.getArrival_time());
		bookingDto.setFlight_date(booking.getFlight_date());
		bookingDto.setFlight_duration(booking.getFlight_duration());
		bookingDto.setPlane_name(booking.getPlane_name());
		bookingDto.setPrice(booking.getPrice());
		bookingDto.setBooked_at(booking.getBooked_at());
		
		return bookingDto;
	}
	
	private Booking convertToEntity(BookingDto bookingDto)
	{
		Booking booking = new Booking();
		
		booking.setUid(bookingDto.getUid());
		booking.setFlight_id(bookingDto.getFlight_id());
		booking.setPassenger_name(bookingDto.getPassenger_name());
		booking.setPassenger_age(bookingDto.getPassenger_age());
		booking.setPassenger_gender(bookingDto.getPassenger_gender());
		booking.setSource(bookingDto.getSource());
		booking.setDeparture_time(bookingDto.getDeparture_time());
		booking.setDestination(bookingDto.getDestination());
		booking.setArrival_time(bookingDto.getArrival_time());
		booking.setFlight_date(bookingDto.getFlight_date());
		booking.setFlight_duration(bookingDto.getFlight_duration());
		booking.setPlane_name(bookingDto.getPlane_name());
		booking.setPrice(bookingDto.getPrice());
		booking.setBooked_at(bookingDto.getBooked_at());
		
		return booking;
	}
}
