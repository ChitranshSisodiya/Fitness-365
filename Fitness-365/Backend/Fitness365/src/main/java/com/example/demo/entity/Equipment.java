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
@Table(name = "Equipments")
@AllArgsConstructor
@Data
@NoArgsConstructor
@Builder
public class Equipment {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int equipmentId;
	@Column(nullable = false)
	private String equipmentName;
	@Column(nullable = false)
	private String equipmentDetail;
	@Column(nullable = false)
	private int quantity;
	@Column(nullable = false)
	private String equipmentType;
	@Column(nullable = false)
	private String equipmentImage;
	public int getEquipmentId() {
		return equipmentId;
	}
	public void setEquipmentId(int equipmentId) {
		this.equipmentId = equipmentId;
	}
	public String getEquipmentName() {
		return equipmentName;
	}
	public void setEquipmentName(String equipmentName) {
		this.equipmentName = equipmentName;
	}
	public String getEquipmentDetail() {
		return equipmentDetail;
	}
	public void setEquipmentDetail(String equipmentDetail) {
		this.equipmentDetail = equipmentDetail;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getEquipmentType() {
		return equipmentType;
	}
	public void setEquipmentType(String equipmentType) {
		this.equipmentType = equipmentType;
	}
	public String getEquipmentImage() {
		return equipmentImage;
	}
	public void setEquipmentImage(String equipmentImage) {
		this.equipmentImage = equipmentImage;
	}
	
	
	
}
