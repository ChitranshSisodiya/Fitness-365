import { Component, OnInit } from '@angular/core';
import { Member } from '../class/Member';
import { Service } from '../services/Services';
import {MatDialog} from '@angular/material/dialog';
import { MemberEditComponent } from '../EditDelete/member-edit/member-edit.component';
import { MemberDeleteComponent } from '../EditDelete/member-delete/member-delete.component';
import { AddMemberComponent } from '../EditDelete/add-member/add-member.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  MemberColumn =["Member Id","Member Name","Member Image","Membership Type","Membership Start Date","Gender","Address","Phone No","Active"];
  members : Member[];
  constructor(private service : Service,private dialog : MatDialog) { }

  ngOnInit(): void {
    this.getAllMember();
  }

  addMember(){
    this.dialog.open(AddMemberComponent,{
      width: '50%',
      height: '70%',
      data: {
        DialogType : 'MemberDialog',
        Columns : this.MemberColumn
      }
    }).afterClosed().subscribe(()=> this.getAllMember());
  }

  openEditDialog(member : Member) {
    this.dialog.open(MemberEditComponent,{
      width: '50%',
      height: '70%',
      data: {
        DialogType : 'MemberDialog',
        Columns : this.MemberColumn,
        ContainerData : member
      }
    }).afterClosed().subscribe(()=> this.getAllMember());
  }

  openDeleteDialog(member : Member) {
    this.dialog.open(MemberDeleteComponent,{
      width: '25%',
      height: '20%',
      data: {
        DialogType : 'MemberDialog',
        ContainerData : member
      }
    }).afterClosed().subscribe(()=> this.getAllMember());
  }

  getAllMember(){
    this.service.getAllMember().subscribe({
      next:(res)=>{
        this.members=res;
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      } 
    });
  }
}
