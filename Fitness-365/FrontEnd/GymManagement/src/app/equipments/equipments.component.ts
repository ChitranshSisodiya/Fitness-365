import { Component, OnInit } from '@angular/core';
import { Equipment } from '../class/Equipment';
import { Service } from '../services/Services';
import {MatDialog} from '@angular/material/dialog';
import { EquipmentEditComponent } from '../EditDelete/equipment-edit/equipment-edit.component';
import { EquipmentDeleteComponent } from '../EditDelete/equipment-delete/equipment-delete.component';
import { AddEquipmentComponent } from '../EditDelete/add-equipment/add-equipment.component';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {
  EquipmentColumn =["Equipment Id","Equipment Name","Equipment Detail","Quantity","Equipment Type","Equipment Image"];
  equipment : Equipment[];
  constructor(private service : Service,private dialog : MatDialog) { }

  ngOnInit(): void {
    this.getAllEquipment();
  }

  addEquipment(){
    this.dialog.open(AddEquipmentComponent,{
        width: '50%',
        height: '70%',
        data: {
          DialogType : 'EquipmentDialog',
          Columns : this.EquipmentColumn
        }
    }).afterClosed().subscribe(()=> this.getAllEquipment());
  }

  openEditDialog(equipment1 : Equipment) {
    this.dialog.open(EquipmentEditComponent,{
      width: '50%',
      height: '70%',
      data: {
        DialogType : 'EquipmentDialog',
        Columns : this.EquipmentColumn,
        ContainerData : equipment1
      }
    }).afterClosed().subscribe(()=> this.getAllEquipment());
  }

  openDeleteDialog(equipment1 : Equipment) {
    this.dialog.open(EquipmentDeleteComponent,{
      width: '25%',
      height: '20%',
      data: {
        DialogType : 'EquipmentDialog',
        ContainerData : equipment1
      }
    }).afterClosed().subscribe(()=> this.getAllEquipment());
  }

  getAllEquipment(){
    this.service.getAllEquipment().subscribe({
      next:(res)=>{
        this.equipment=res;
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      } 
    });
  }
}
