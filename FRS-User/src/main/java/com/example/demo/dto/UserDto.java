package com.example.demo.dto;

public class UserDto {

	 	private long uid;
	    private String uname;
	    private String uemail;
	    private String upassword;

	    public UserDto() {}

	    public UserDto(long uid, String uname, String uemail,String upassword) {
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
