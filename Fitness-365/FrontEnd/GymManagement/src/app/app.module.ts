import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MembersComponent } from './members/members.component';
import { EmployeesComponent } from './employees/employees.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRowDef, MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {Service} from '../app/services/Services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeEditComponent } from './EditDelete/employee-edit/employee-edit.component';
import { EmployeeDeleteComponent } from './EditDelete/employee-delete/employee-delete.component';
import { MemberEditComponent } from './EditDelete/member-edit/member-edit.component';
import { MemberDeleteComponent } from './EditDelete/member-delete/member-delete.component';
import { EquipmentEditComponent } from './EditDelete/equipment-edit/equipment-edit.component';
import { EquipmentDeleteComponent } from './EditDelete/equipment-delete/equipment-delete.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { AddEmployeeComponent } from './EditDelete/add-employee/add-employee.component';
import { AddEquipmentComponent } from './EditDelete/add-equipment/add-equipment.component';
import { AddMemberComponent } from './EditDelete/add-member/add-member.component';
import { RegisterMemberComponent } from './EditDelete/register-member/register-member.component'


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MembersComponent,
    EmployeesComponent,
    EquipmentsComponent,
    LoginSignupComponent,
    HomeComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent,
    MemberEditComponent,
    MemberDeleteComponent,
    EquipmentEditComponent,
    EquipmentDeleteComponent,
    AddEmployeeComponent,
    AddEquipmentComponent,
    AddMemberComponent,
    RegisterMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [Service,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
