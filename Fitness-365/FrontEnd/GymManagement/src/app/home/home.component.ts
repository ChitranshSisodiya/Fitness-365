import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterMemberComponent } from '../EditDelete/register-member/register-member.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: String[]=[];
  MemberColumn =["Member Id","Member Name","Member Image","Membership Type","Membership Start Date","Gender","Address","Phone No","Active"];

  constructor(private route : Router,private dialog : MatDialog) { 
  }
  tableColumn: any[];
  ngOnInit(): void {
    this.images.push('../assets/Img/HomeImg1.jpg');
    this.images.push('../assets/Img/HomeImg2.jpg');
    this.images.push('../assets/Img/HomeImg3.jpg');
    this.images.push('../assets/Img/HomeImg4.jpg');
  }

  login() : void{
    // alert("login Clicked");
    this.route.navigate(['/loginSignup']);
  }
  RegisterUser(): void{
    this.dialog.open(RegisterMemberComponent,{
      width: '50%',
      height: '70%',
      data: {
        DialogType : 'MemberDialog',
        Columns : this.MemberColumn
      }
    });
  }
}
