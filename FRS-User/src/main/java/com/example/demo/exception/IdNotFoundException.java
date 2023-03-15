package com.example.demo.exception;

public class IdNotFoundException extends RuntimeException{

	String errorMsg;

	public IdNotFoundException(String errorMsg) {
		this.errorMsg = errorMsg;
	}

	public String getErrorMsg() {
		return errorMsg;
	}
	
	
}
