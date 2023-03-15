package com.example.demo.dto;

public class AdminDto {

	  private long aid;
	  private String aname;
	  private String apassword;
	  
	public AdminDto() {}

	public AdminDto(long aid, String aname, String apassword) {
		this.aid = aid;
		this.aname = aname;
		this.apassword = apassword;
	}

	public long getAid() {
		return aid;
	}

	public void setAid(long aid) {
		this.aid = aid;
	}

	public String getAname() {
		return aname;
	}

	public void setAname(String aname) {
		this.aname = aname;
	}

	public String getApassword() {
		return apassword;
	}

	public void setApassword(String apassword) {
		this.apassword = apassword;
	}
	  
}
