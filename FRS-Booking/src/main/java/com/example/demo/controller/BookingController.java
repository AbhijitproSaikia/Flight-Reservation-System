package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import com.example.demo.dto.BookingDto;
import com.example.demo.entity.Booking;
import com.example.demo.service.BookingService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v6")
public class BookingController {

	@Autowired
    private BookingService bookingService;
	
	@GetMapping("/allbookings")
    public ResponseEntity<List<BookingDto>> AllBookings() {
        List<BookingDto> bookingDtos = bookingService.getAllBookings();
        return new ResponseEntity<List<BookingDto>>(bookingDtos, HttpStatus.OK);
    }
	
	@GetMapping("/mybookings/{uid}")
    public ResponseEntity<List<Booking>> mybookings(@PathVariable Long uid) {
        List<Booking> booking = bookingService.findByUid(uid);
        return new ResponseEntity<List<Booking>>(booking, HttpStatus.OK);
    }
	
	@PostMapping("/newbooking")
    public ResponseEntity<BookingDto> createUser(@RequestBody BookingDto bookingDto) {
        BookingDto newBookingDto = bookingService.addBooking(bookingDto);
        return new ResponseEntity<BookingDto>(newBookingDto, HttpStatus.CREATED);
    }
}


