import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  static employeeComponent: boolean=true;
  static memberComponent: boolean=false;
  static equipmentComponent: boolean=false;
  // EmployeeStyle =['rgb(75, 74, 74)','white'];
  get  Employee() {
    return DashboardComponent.employeeComponent;
  }
  get  Member() {
    return DashboardComponent.memberComponent;
  }
  get  Equipment() {
    return DashboardComponent.equipmentComponent;
  }

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }
  showAlert(){
    
  }

  EmployeeButton(): void{
    DashboardComponent.employeeComponent=true;
    DashboardComponent.memberComponent=false;
    DashboardComponent.equipmentComponent=false;

  }
  MemberButton(): void{ 
    DashboardComponent.employeeComponent=false;
    DashboardComponent.memberComponent=true;
    DashboardComponent.equipmentComponent=false;

  }
  EquipmentButton(): void{
    DashboardComponent.employeeComponent=false;
    DashboardComponent.memberComponent=false;
    DashboardComponent.equipmentComponent=true;
  }

}


