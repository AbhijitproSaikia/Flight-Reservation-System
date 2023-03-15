package com.axis.configuration;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringCloudRoutting {
	@Bean
	public RouteLocator configureRoute(RouteLocatorBuilder builder) {
		return builder.routes()
				.route("gateway1", r -> r.path("/api/v6/**").uri("http://localhost:8888"))
	            .route("gateway2", r -> r.path("/api/v6/**").uri("http://localhost:9091"))
	            
	            .build();
	}

}


