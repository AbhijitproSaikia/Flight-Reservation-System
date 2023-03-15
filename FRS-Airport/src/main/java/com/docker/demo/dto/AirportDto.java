package com.docker.demo.dto;

public class AirportDto {
	
	private long airport_id;
	private String airport_name;
	
	public AirportDto() {}

	public AirportDto(long airport_id, String airport_name) {
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
