import { Component, Inject, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormControlName,Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/class/Employee';
import { Service } from 'src/app/services/Services';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})

export class EmployeeEditComponent implements OnInit {
  employee : Employee=new Employee();
  EmployeeForm=new FormGroup({
    employeeId : new FormControl({value : this.data.ContainerData.employeeId,disabled : true}),
    employeeName : new FormControl(this.data.ContainerData.employeeName),
    employeeImage : new FormControl(this.data.ContainerData.employeeImage),
    address : new FormControl(this.data.ContainerData.address),
    phoneNo : new FormControl(this.data.ContainerData.phoneNo)
  });
  activeSelected=this.data.ContainerData.isActive;
  Active=["true","false"];
  genderSelected = this.data.ContainerData.gender;
  Gender = ['male','female'];
  empType=['Trainee','Receptionist'];
  TypeSelected=this.data.ContainerData.employeeType;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,private service : Service, public dialogRef : MatDialogRef<EmployeeEditComponent>
  ) { }

  ngOnInit(): void {
  }

  edit(){
    this.employee.employeeId=this.data.ContainerData.employeeId;
    this.employee.employeeName=this.EmployeeForm.value.employeeName;
    this.employee.employeeImage=this.EmployeeForm.value.employeeImage;
    this.employee.employeeType=this.TypeSelected;
    this.employee.gender=this.genderSelected;
    this.employee.address=this.EmployeeForm.value.address;
    this.employee.phoneNo=this.EmployeeForm.value.phoneNo;
    this.employee.isActive=this.activeSelected;
    console.log(this.employee);
    this.service.editEmployee(this.employee).subscribe({
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
