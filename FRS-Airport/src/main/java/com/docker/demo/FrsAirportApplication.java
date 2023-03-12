package com.docker.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class FrsAirportApplication {

	public static void main(String[] args) {
		SpringApplication.run(FrsAirportApplication.class, args);
	}

}
