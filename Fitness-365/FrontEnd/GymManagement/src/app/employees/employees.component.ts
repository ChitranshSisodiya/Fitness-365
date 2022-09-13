import { Component, OnInit } from '@angular/core';
import { Employee } from '../class/Employee';
import { Service } from '../services/Services';
import {MatDialog} from '@angular/material/dialog';
import { EmployeeEditComponent } from '../EditDelete/employee-edit/employee-edit.component';
import { EmployeeDeleteComponent } from '../EditDelete/employee-delete/employee-delete.component';
import { AddEmployeeComponent } from '../EditDelete/add-employee/add-employee.component';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  EmployeeColumns : any[]=["Employee Id","Employee Name","Employee Image","Employee Type","Gender", " Address","Phone No","Active"];
  employees : Employee[];
  constructor(private service : Service,private dialog : MatDialog) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  addEmployee(){
    this.dialog.open(AddEmployeeComponent,{
      width: '50%',
      height: '70%',
      data: {
        Columns : this.EmployeeColumns
      }
    }).afterClosed().subscribe(() => this.getAllEmployee());
  }

  openEditDialog(employee : Employee) {
    this.dialog.open(EmployeeEditComponent,{
      width: '50%',
      height: '70%',
      data: {
        Columns : this.EmployeeColumns,
        ContainerData : employee
      }
    }).afterClosed().subscribe(() => this.getAllEmployee());
  }

  openDeleteDialog(employee : Employee){
    this.dialog.open(EmployeeDeleteComponent,{
      width: '25%',
      height: '20%',
      data: {
        ContainerData : employee
      }
    }).afterClosed().subscribe(() => this.getAllEmployee());
  }

  getAllEmployee(){
    this.service.getAllEmployee().subscribe({
      next:(res)=>{
        this.employees=res;
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      } 
    });
  }

}
