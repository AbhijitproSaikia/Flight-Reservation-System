package com.docker.demo.dto;

public class ScheduleDto {

	private long sid;
    private String departure_time;
    private String arrival_time;
    private String flight_duration;
    private String flight_id;
    private String plane_name;
	private float price;
	
	public ScheduleDto() {}

	public ScheduleDto(long sid, String departure_time, String arrival_time, String flight_duration, String flight_id,
			String plane_name, float price) {
		super();
		this.sid = sid;
		this.departure_time = departure_time;
		this.arrival_time = arrival_time;
		this.flight_duration = flight_duration;
		this.flight_id = flight_id;
		this.plane_name = plane_name;
		this.price = price;
	}

	public long getSid() {
		return sid;
	}

	public void setSid(long sid) {
		this.sid = sid;
	}

	public String getDeparture_time() {
		return departure_time;
	}

	public void setDeparture_time(String departure_time) {
		this.departure_time = departure_time;
	}

	public String getArrival_time() {
		return arrival_time;
	}

	public void setArrival_time(String arrival_time) {
		this.arrival_time = arrival_time;
	}

	public String getFlight_duration() {
		return flight_duration;
	}

	public void setFlight_duration(String flight_duration) {
		this.flight_duration = flight_duration;
	}

	public String getFlight_id() {
		return flight_id;
	}

	public void setFlight_id(String flight_id) {
		this.flight_id = flight_id;
	}

	public String getPlane_name() {
		return plane_name;
	}

	public void setPlane_name(String plane_name) {
		this.plane_name = plane_name;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}
	
}
