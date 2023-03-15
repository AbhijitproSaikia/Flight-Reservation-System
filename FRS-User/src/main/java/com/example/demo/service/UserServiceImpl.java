package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;
import com.example.demo.exception.IdNotFoundException;
import com.example.demo.repository.UserRepository;

@Service 
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;
	
	@Override
	public UserDto findByUid(Long uid) {
		User optUser = userRepository.findByUid(uid);
	    if(optUser!=null)
	    	return convertToDto(userRepository.findByUid(uid));
	    else   
	        throw new IdNotFoundException("ID not found");
	}

	@Override
	public User findByUnameAndUpassword(String uname, String upassword) {
		User user=userRepository.findByUnameAndUpassword(uname, upassword);
		return user;
	}

	@Override
	public UserDto updateUser(long uid, User user) {
		User user1=userRepository.findById(uid).orElseThrow();
		user1.setUname(user.getUname());
		user1.setUemail(user.getUemail());
		user1.setUpassword(user.getUpassword());

		return convertToDto(userRepository.save(user1));
	}

	@Override
	public UserDto addUser(UserDto userDto) {
		return convertToDto(userRepository.save(convertToEntity(userDto)));
	}

	@Override
	public List<UserDto> getAllUsers() {
		List<User> users=userRepository.findAll();
		List<UserDto> userDtos = new ArrayList<UserDto>();
		for(User user :users)
		{
			userDtos.add(convertToDto(user));
		}
		return userDtos;
	}

	@Override
	public String deleteUser(Long uid) {
		User user=userRepository.findById(uid).orElseThrow();
		userRepository.delete(user);
		return "deletion successfull" ;
	}
	
	
	private UserDto convertToDto(User user)
	{
		UserDto userDto = new UserDto();
		
		userDto.setUid(user.getUid());
		userDto.setUname(user.getUname());
		userDto.setUemail(user.getUemail());
		userDto.setUpassword(user.getUpassword());

		return userDto;
	}
	
	private User convertToEntity(UserDto userDto)
	{
		User user = new User();
		
		user.setUname(userDto.getUname());
		user.setUemail(userDto.getUemail());
		user.setUpassword(userDto.getUpassword());
		
		return user;
	}
}

