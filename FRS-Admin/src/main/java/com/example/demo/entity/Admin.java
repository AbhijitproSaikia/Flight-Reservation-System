package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Admin")
public class Admin {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long aid;
    private String aname;
    private String apassword;
	public Admin() {
		super();
	}
	
	public Admin(long aid, String aname, String apassword) {
		super();
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
