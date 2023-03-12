package com.docker.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import com.docker.demo.dto.AirportDto;
import com.docker.demo.service.AirportSevice;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v6")
public class AirportController {

	@Autowired
    private AirportSevice airportService;
	
	@GetMapping("/airports")
    public ResponseEntity<List<AirportDto>> getAllAirports() {
        List<AirportDto> airportDtos = airportService.getAllAirports();
        return new ResponseEntity<List<AirportDto>>(airportDtos, HttpStatus.OK);
    }
	
	@PostMapping("/addairport")
    public ResponseEntity<AirportDto> createAirport(@RequestBody AirportDto airportDto) {
        AirportDto newAirportDto = airportService.addAirport(airportDto);
        return new ResponseEntity<AirportDto>(newAirportDto, HttpStatus.CREATED);
    }
}
