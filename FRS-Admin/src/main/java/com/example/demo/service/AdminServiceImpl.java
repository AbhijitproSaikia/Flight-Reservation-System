package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.AdminDto;
import com.example.demo.entity.Admin;
import com.example.demo.exception.IdNotFoundException;
import com.example.demo.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	AdminRepository adminRepository;
	

	@Override
	public AdminDto addAdmin(AdminDto adminDto) {
		return convertToDto(adminRepository.save(convertToEntity(adminDto)));
	}
	
	
	@Override
	public List<AdminDto> getAllAdmins() {
		List<Admin> admins=adminRepository.findAll();
		List<AdminDto> adminDtos = new ArrayList<AdminDto>();
		for(Admin admin :admins)
		{
			adminDtos.add(convertToDto(admin));
		}
		return adminDtos;
	}

	@Override
	public AdminDto findByAid(Long aid) {
		Admin optAdmin = adminRepository.findByAid(aid);
	    if(optAdmin!=null)
	    	return convertToDto(adminRepository.findByAid(aid));
	    else   
	        throw new IdNotFoundException("ID not found");
	}

	@Override
	public Admin findByAnameAndApassword(String aname, String apassword) {
		Admin admin=adminRepository.findByAnameAndApassword(aname, apassword);
		return admin;
	}
	
	private AdminDto convertToDto(Admin admin)
	{
		AdminDto adminDto = new AdminDto();
		
		adminDto.setAid(admin.getAid());
		adminDto.setAname(admin.getAname());
		adminDto.setApassword(admin.getApassword());

		return adminDto;
	}

	
	private Admin convertToEntity(AdminDto adminDto)
	{
		Admin admin = new Admin();
		
		admin.setAname(adminDto.getAname());
		admin.setApassword(adminDto.getApassword());
		
		return admin;
	}

}
