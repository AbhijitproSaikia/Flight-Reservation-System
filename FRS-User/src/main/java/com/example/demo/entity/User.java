package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="User")
public class User {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long uid;
    private String uname;
    @Column(unique=true)
    private String uemail;
    private String upassword;
    
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(long uid, String uname, String uemail, String upassword) {
		super();
		this.uid = uid;
		this.uname = uname;
		this.uemail = uemail;
		this.upassword = upassword;
	}

	public long getUid() {
		return uid;
	}

	public void setUid(long uid) {
		this.uid = uid;
	}

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getUemail() {
		return uemail;
	}

	public void setUemail(String uemail) {
		this.uemail = uemail;
	}

	public String getUpassword() {
		return upassword;
	}

	public void setUpassword(String upassword) {
		this.upassword = upassword;
	}
	
}
