package com.docker.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.docker.demo.dto.AirportDto;
import com.docker.demo.entity.Airport;
import com.docker.demo.repository.AirportRepository;

@Service
public class AirportServiceImpl implements AirportSevice{
	
	@Autowired
	AirportRepository airportRepository;
	
	@Override
	public List<AirportDto> getAllAirports() {
		List<Airport> airports=airportRepository.findAll();
		List<AirportDto> airportDtos = new ArrayList<AirportDto>();
		for(Airport airport :airports)
		{
			airportDtos.add(convertToDto(airport));
		}
		return airportDtos;
	}
	
	@Override
	public AirportDto addAirport(AirportDto airportDto) {
		return convertToDto(airportRepository.save(convertToEntity(airportDto)));
	}
	
	
	
	
	
	private AirportDto convertToDto(Airport airport)
	{
		AirportDto airportDto = new AirportDto();		
		airportDto.setAirport_name(airport.getAirport_name());
		return airportDto;
	}
	
	private Airport convertToEntity(AirportDto airportDto)
	{
		Airport airport = new Airport();
		airport.setAirport_name(airportDto.getAirport_name());
		return airport;
	}





	
}
