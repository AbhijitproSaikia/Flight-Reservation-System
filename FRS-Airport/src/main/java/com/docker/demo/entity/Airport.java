package com.docker.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="airport")
public class Airport {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long airport_id;
	private String airport_name;
	
	public Airport() {
		super();
		
	}

	public Airport(long airport_id, String airport_name) {
		super();
		this.airport_id = airport_id;
		this.airport_name = airport_name;
	}

	public long getAirport_id() {
		return airport_id;
	}

	public void setAirport_id(long airport_id) {
		this.airport_id = airport_id;
	}

	public String getAirport_name() {
		return airport_name;
	}

	public void setAirport_name(String airport_name) {
		this.airport_name = airport_name;
	}
	
	
	
}
