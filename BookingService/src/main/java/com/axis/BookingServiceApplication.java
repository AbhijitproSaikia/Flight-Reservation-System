package com.axis;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


@EnableEurekaClient
@SpringBootApplication
public class BookingServiceApplication {

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(BookingServiceApplication.class);
		app.setDefaultProperties(Collections.singletonMap("server.port", "9092"));
		app.run(args);
	}

}
