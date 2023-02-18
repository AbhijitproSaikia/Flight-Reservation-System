package com.axis;

import java.util.Collections;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;


@EnableEurekaServer
@SpringBootApplication
public class EurekaServerApplication {

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(EurekaServerApplication.class);
		app.setDefaultProperties(Collections.singletonMap("server.port", "8762"));
		app.run(args);
	}

}
