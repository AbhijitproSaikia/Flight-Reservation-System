package com.example.demo.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(IdNotFoundException.class)
	ResponseEntity<ErrroInfo> myExceptionResponse1(IdNotFoundException exception)
	{
		ErrroInfo errroInfo = new ErrroInfo();
		errroInfo.setStatus(HttpStatus.NOT_FOUND.toString());
		errroInfo.setErrorMessage(exception.getErrorMsg());
		errroInfo.setLocalDateTime(LocalDateTime.now());
		
		
		return new ResponseEntity<ErrroInfo>(errroInfo , HttpStatus.NOT_FOUND);
	}
	
	
}

