package com.docker.demo.service;

import java.util.List;

import com.docker.demo.dto.AirportDto;

public interface AirportSevice {

	public List<AirportDto> getAllAirports();
	public AirportDto addAirport(AirportDto airportDto);
	
}
