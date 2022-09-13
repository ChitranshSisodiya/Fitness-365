import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'loginSignup',
    component: LoginSignupComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
