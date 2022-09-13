package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Employees")
@AllArgsConstructor
@Data
@NoArgsConstructor
@Builder
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int employeeId;
	@Column(nullable = false)
	private String employeeName;
	@Column(nullable = false)
	private String employeeImage;
	@Column(nullable = false)
	private String employeeType;
	@Column(nullable = false)
	private String gender;
	@Column(nullable = false)
	private String address;
	@Column(nullable = false)
	private int phoneNo;
	@Column(nullable = false)
	private String isActive;

	
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	public String getEmployeeImage() {
		return employeeImage;
	}
	public void setEmployeeImage(String employeeImage) {
		this.employeeImage = employeeImage;
	}
	public String getEmployeeType() {
		return employeeType;
	}
	public void setEmployeeType(String employeeType) {
		this.employeeType = employeeType;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(int phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getIsActive() {
		return isActive;
	}
	public void setIsActive(String isActive) {
		this.isActive = isActive;
	}
	
	

}
