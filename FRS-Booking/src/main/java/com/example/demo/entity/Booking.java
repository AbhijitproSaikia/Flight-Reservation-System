package com.example.demo.entity;


import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Booking {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long booking_id;
	private long uid;
	private String flight_id;
	private String passenger_name;
	private int passenger_age;
	private String passenger_gender;
	private String source;
	private String departure_time;
	private String destination;
	private String arrival_time;
	private String flight_date;
	private String flight_duration;
	private String plane_name;
	private float price;
	private int seat;
	private Timestamp booked_at=new Timestamp(System.currentTimeMillis());
	
	public Booking() {
		super();
	}

	public Booking(long booking_id, long uid, String flight_id, String passenger_name, int passenger_age,
			String passenger_gender, String source, String departure_time, String destination, String arrival_time,
			String flight_date, String flight_duration, String plane_name, float price, int seat, Timestamp booked_at) {
		super();
		this.booking_id = booking_id;
		this.uid = uid;
		this.flight_id = flight_id;
		this.passenger_name = passenger_name;
		this.passenger_age = passenger_age;
		this.passenger_gender = passenger_gender;
		this.source = source;
		this.departure_time = departure_time;
		this.destination = destination;
		this.arrival_time = arrival_time;
		this.flight_date = flight_date;
		this.flight_duration = flight_duration;
		this.plane_name = plane_name;
		this.price = price;
		this.seat = seat;
		this.booked_at = booked_at;
	}

	public long getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(long booking_id) {
		this.booking_id = booking_id;
	}

	public long getUid() {
		return uid;
	}

	public void setUid(long uid) {
		this.uid = uid;
	}

	public String getFlight_id() {
		return flight_id;
	}

	public void setFlight_id(String flight_id) {
		this.flight_id = flight_id;
	}

	public String getPassenger_name() {
		return passenger_name;
	}

	public void setPassenger_name(String passenger_name) {
		this.passenger_name = passenger_name;
	}

	public int getPassenger_age() {
		return passenger_age;
	}

	public void setPassenger_age(int passenger_age) {
		this.passenger_age = passenger_age;
	}

	public String getPassenger_gender() {
		return passenger_gender;
	}

	public void setPassenger_gender(String passenger_gender) {
		this.passenger_gender = passenger_gender;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDeparture_time() {
		return departure_time;
	}

	public void setDeparture_time(String departure_time) {
		this.departure_time = departure_time;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getArrival_time() {
		return arrival_time;
	}

	public void setArrival_time(String arrival_time) {
		this.arrival_time = arrival_time;
	}

	public String getFlight_date() {
		return flight_date;
	}

	public void setFlight_date(String flight_date) {
		this.flight_date = flight_date;
	}

	public String getFlight_duration() {
		return flight_duration;
	}

	public void setFlight_duration(String flight_duration) {
		this.flight_duration = flight_duration;
	}

	public String getPlane_name() {
		return plane_name;
	}

	public void setPlane_name(String plane_name) {
		this.plane_name = plane_name;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getSeat() {
		return seat;
	}

	public void setSeat(int seat) {
		this.seat = seat;
	}

	public Timestamp getBooked_at() {
		return booked_at;
	}

	public void setBooked_at(Timestamp booked_at) {
		this.booked_at = booked_at;
	}

}
