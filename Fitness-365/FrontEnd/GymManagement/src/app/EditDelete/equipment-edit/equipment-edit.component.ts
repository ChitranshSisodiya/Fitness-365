import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Equipment } from 'src/app/class/Equipment';
import { Service } from 'src/app/services/Services';

@Component({
  selector: 'app-equipment-edit',
  templateUrl: './equipment-edit.component.html',
  styleUrls: ['./equipment-edit.component.css']
})
export class EquipmentEditComponent implements OnInit {

  equipment : Equipment=new Equipment();
  EquipmentForm=new FormGroup({
    equipmentId : new FormControl({ value : this.data.ContainerData.equipmentId, disabled : true}),
    equipmentName : new FormControl(this.data.ContainerData.equipmentName),
    equipmentDetail : new FormControl(this.data.ContainerData.equipmentDetail),
    quantity : new FormControl(this.data.ContainerData.quantity),
    equipmentImage : new FormControl(this.data.ContainerData.equipmentImage)
  });
  equipType=['Cardio','Strength'];
  equipSelected=this.data.ContainerData.equipmentType;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,private service : Service, public dialogRef : MatDialogRef<EquipmentEditComponent>
  ) { }

  ngOnInit(): void {
  }

  edit(){
    this.equipment.equipmentId=this.data.ContainerData.equipmentId;
    this.equipment.equipmentName=this.EquipmentForm.value.equipmentName;
    this.equipment.equipmentDetail=this.EquipmentForm.value.equipmentDetail;
    this.equipment.quantity=this.EquipmentForm.value.quantity;
    this.equipment.equipmentType=this.equipSelected;
    this.equipment.equipmentImage=this.EquipmentForm.value.equipmentImage;
    this.service.editEquipment(this.equipment).subscribe({
      next : (res) => {
        console.log(res);
        if(res==true){
          alert("Edited Successfully");
          this.dialogRef.close();
        }
        else alert("Edit Failed");
      },
      error : (res) => {
        console.log(res);
        alert("Code Error");
      }
    });
  }



}
