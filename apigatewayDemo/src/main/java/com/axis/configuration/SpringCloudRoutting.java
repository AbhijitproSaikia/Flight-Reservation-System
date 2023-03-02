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
				.route("gateway1Id", r->r.path("/gateway1/**").uri("http://localhost:9090"))
				.route("gateway2Id", r->r.path("/gateway2/**").uri("http://localhost:9091"))
				.build();
	}

}
