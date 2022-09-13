import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Service } from 'src/app/services/Services';

@Component({
  selector: 'app-equipment-delete',
  templateUrl: './equipment-delete.component.html',
  styleUrls: ['./equipment-delete.component.css']
})
export class EquipmentDeleteComponent implements OnInit {
  equipId=this.data.ContainerData.equipmentId;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,private service : Service,public dialogRef : MatDialogRef<EquipmentDeleteComponent>
  ) { }

  ngOnInit(): void {
  }

  delete(){
    this.deleteTheEquipment(this.equipId);
  }

  deleteTheEquipment(id : number){
    this.service.deleteEquipment(id).subscribe({
      next : (res) => {
        console.log(res);
        if(res==true){
          alert("Deleted Successfully");
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
