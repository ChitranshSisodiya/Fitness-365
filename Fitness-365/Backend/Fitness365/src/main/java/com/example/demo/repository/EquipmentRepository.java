package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Equipment;

@Repository
public interface EquipmentRepository extends JpaRepository<Equipment,Integer>{

    public Equipment findByEquipmentId(int id);

    public List<Equipment> findByEquipmentType(String string);

    public int deleteByEquipmentId(int id);

}