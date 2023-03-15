package com.docker.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.docker.demo.entity.Schedule;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {


	
}
