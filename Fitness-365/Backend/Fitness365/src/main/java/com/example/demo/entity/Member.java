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
@Table(name = "Members")
@AllArgsConstructor
@Data
@NoArgsConstructor
@Builder
public class Member {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int memberId;
	@Column(nullable = false)
	private String memberName;
	@Column(nullable = false)
	private String memberImage;
	@Column(nullable = false)
	private String membershipType;
	@Column(nullable = false)
	private String membershipStartDate;
	@Column(nullable = false)
	private String gender;
	@Column(nullable = false)
	private String address;
	@Column(nullable = false)
	private int phoneNo;
	@Column(nullable = false)
	private String isActive;
	
	public int getMemberId() {
		return memberId;
	}
	public void setMemberId(int memberId) {
		this.memberId = memberId;
	}
	public String getMemberName() {
		return memberName;
	}
	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}
	public String getMemberImage() {
		return memberImage;
	}
	public void setMemberImage(String memberImage) {
		this.memberImage = memberImage;
	}
	public String getMembershipType() {
		return membershipType;
	}
	public void setMembershipType(String membershipType) {
		this.membershipType = membershipType;
	}
	public String getMembershipStartDate() {
		return membershipStartDate;
	}
	public void setMembershipStartDate(String membershipStartDate) {
		this.membershipStartDate = membershipStartDate;
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
