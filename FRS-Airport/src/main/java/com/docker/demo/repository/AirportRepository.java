package com.docker.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.docker.demo.entity.Airport;

@Repository
public interface AirportRepository extends  JpaRepository<Airport, Long>{

}
