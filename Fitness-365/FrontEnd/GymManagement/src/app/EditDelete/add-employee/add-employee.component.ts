import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/class/Employee';
import { Service } from 'src/app/services/Services';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee : Employee=new Employee();
  EmployeeForm=new FormGroup({
    employeeName : new FormControl('',Validators.required),
    employeeImage : new FormControl('',Validators.required),
    address : new FormControl('',Validators.required),
    phoneNo : new FormControl()
  });
  
  Gender = ['male','female'];
  Type=['Trainee','Receptionist'];
  Active=["true","false"];
  activeSelected=this.Active[1];
  typeSelected : string=this.Type[0];
  genderSelected : string=this.Gender[0];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,private service : Service, public dialogRef : MatDialogRef<AddEmployeeComponent>
  ) { }

  ngOnInit(): void {
  }

  save(){
    this.employee.employeeName=this.EmployeeForm.value.employeeName!;
    this.employee.employeeImage=this.EmployeeForm.value.employeeImage!;
    this.employee.employeeType=this.typeSelected;
    this.employee.gender=this.genderSelected;
    this.employee.address=this.EmployeeForm.value.address!;
    this.employee.phoneNo=this.EmployeeForm.value.phoneNo;
    this.employee.isActive=this.activeSelected;

    this.service.addEmployee(this.employee).subscribe({
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
