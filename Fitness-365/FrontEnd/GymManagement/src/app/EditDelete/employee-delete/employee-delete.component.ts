import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Service } from 'src/app/services/Services';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {
  empId=this.data.ContainerData.employeeId;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,private service : Service,public dialogRef : MatDialogRef<EmployeeDeleteComponent>
  ) { }

  ngOnInit(): void {
  }

  delete(){
    this.deleteTheEmployee(this.empId);
  }

  deleteTheEmployee(id : number){
    this.service.deleteEmployee(id).subscribe({
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
