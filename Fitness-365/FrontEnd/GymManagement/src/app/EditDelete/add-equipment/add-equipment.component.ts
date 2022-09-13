import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Equipment } from 'src/app/class/Equipment';
import { Service } from 'src/app/services/Services';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {
  equipment : Equipment=new Equipment();
  equipmentForm=new FormGroup({
    equipmentName : new FormControl('',Validators.required),
    equipmentDetail : new FormControl('',Validators.required),
    quantity : new FormControl(),
    equipmentImage : new FormControl('',Validators.required)
  });
  
  Type=['Cardio','Strength'];
  typeSelected : string=this.Type[0];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,private service : Service, public dialogRef : MatDialogRef<AddEquipmentComponent>
  ) { }

  ngOnInit(): void {
  }

  save(){

    this.equipment.equipmentName=this.equipmentForm.value.equipmentName!;
    this.equipment.equipmentDetail=this.equipmentForm.value.equipmentDetail!;
    this.equipment.quantity=this.equipmentForm.value.quantity;
    this.equipment.equipmentImage=this.equipmentForm.value.equipmentImage!;
    this.equipment.equipmentType=this.typeSelected;

    this.service.addEquipment(this.equipment).subscribe({
      next : (res) => {
        console.log(res);
        if(res==true){
          alert("Saved Successfully");
          this.dialogRef.close();
        }
        else alert("Failed");
      },
      error : (res) => {
        console.log(res);
        alert("Code Error");
      }
    });
  }
}
