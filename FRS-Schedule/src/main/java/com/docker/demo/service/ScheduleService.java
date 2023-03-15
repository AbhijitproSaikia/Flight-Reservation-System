package com.docker.demo.service;

import java.util.List;

import com.docker.demo.dto.ScheduleDto;

public interface ScheduleService {
	
	public List<ScheduleDto> getAllSchedules();
	public ScheduleDto addSchedule(ScheduleDto scheduleDto);

}
