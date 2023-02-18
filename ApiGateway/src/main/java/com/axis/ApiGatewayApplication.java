package com.axis;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



@SpringBootApplication
public class ApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(ApiGatewayApplication.class);
		app.setDefaultProperties(Collections.singletonMap("server.port", "8090"));
		app.run(args);
	}

}
