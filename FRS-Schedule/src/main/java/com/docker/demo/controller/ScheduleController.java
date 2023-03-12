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

import com.docker.demo.dto.ScheduleDto;
import com.docker.demo.service.ScheduleService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v6")
public class ScheduleController {
	
	@Autowired
    private ScheduleService scheduleService;
	
	@GetMapping("/schedules")
    public ResponseEntity<List<ScheduleDto>> getAllSchedules() {
        List<ScheduleDto> scheduleDtos = scheduleService.getAllSchedules();
        return new ResponseEntity<List<ScheduleDto>>(scheduleDtos, HttpStatus.OK);
    }
	
	@PostMapping("/addschedule")
    public ResponseEntity<ScheduleDto> createSchedule(@RequestBody ScheduleDto scheduleDto) {
        ScheduleDto newScheduleDto = scheduleService.addSchedule(scheduleDto);
        return new ResponseEntity<ScheduleDto>(newScheduleDto, HttpStatus.CREATED);
    }

}
