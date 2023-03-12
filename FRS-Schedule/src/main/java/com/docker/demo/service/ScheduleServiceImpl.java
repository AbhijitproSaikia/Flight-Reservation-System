package com.docker.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.docker.demo.dto.ScheduleDto;
import com.docker.demo.entity.Schedule;
import com.docker.demo.repository.ScheduleRepository;

@Service
public class ScheduleServiceImpl implements ScheduleService {
	
	@Autowired
	ScheduleRepository scheduleRepository;
	
	@Override
	public List<ScheduleDto> getAllSchedules() {
		List<Schedule> schedules=scheduleRepository.findAll();
		List<ScheduleDto> scheduleDtos = new ArrayList<ScheduleDto>();
		for(Schedule schedule :schedules)
		{
			scheduleDtos.add(convertToDto(schedule));
		}
		return scheduleDtos;
	}
	
	@Override
	public ScheduleDto addSchedule(ScheduleDto scheduleDto) {
		return convertToDto(scheduleRepository.save(convertToEntity(scheduleDto)));
	}
	

	
	private ScheduleDto convertToDto(Schedule schedule)
	{
		ScheduleDto scheduleDto = new ScheduleDto();		
		
		scheduleDto.setDeparture_time(schedule.getDeparture_time());
		scheduleDto.setArrival_time(schedule.getArrival_time());
		scheduleDto.setFlight_duration(schedule.getFlight_duration());
		scheduleDto.setFlight_id(schedule.getFlight_id());
		scheduleDto.setPlane_name(schedule.getPlane_name());
		scheduleDto.setPrice(schedule.getPrice());
		
		
		
		return scheduleDto;
	}
	
	private Schedule convertToEntity(ScheduleDto scheduleDto)
	{
		Schedule schedule = new Schedule();
		
		schedule.setDeparture_time(scheduleDto.getDeparture_time());
		schedule.setArrival_time(scheduleDto.getArrival_time());
		schedule.setFlight_duration(scheduleDto.getFlight_duration());
		schedule.setFlight_id(scheduleDto.getFlight_id());
		schedule.setPlane_name(scheduleDto.getPlane_name());
		schedule.setPrice(scheduleDto.getPrice());
		
		
		return schedule;
	}

}
