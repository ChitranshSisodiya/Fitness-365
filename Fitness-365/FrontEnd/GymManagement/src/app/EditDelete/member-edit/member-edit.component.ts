import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Member } from 'src/app/class/Member';
import { Service } from 'src/app/services/Services';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,private service : Service,public dialogRef : MatDialogRef<MemberEditComponent>,public datepipe : DatePipe
  ) { }

  minDate=new Date(2022,7,1);
  date : string;
  member : Member=new Member();
  MemberForm =new FormGroup({
    memberId : new FormControl({ value : this.data.ContainerData.memberId, disabled : true}),
    membershipStartDate : new FormControl(),
    memberName : new FormControl(this.data.ContainerData.memberName),
    memberImage : new FormControl(this.data.ContainerData.memberImage),
    address : new FormControl(this.data.ContainerData.address),
    phoneNo : new FormControl(this.data.ContainerData.phoneNo)
  });

  memberType =['1 month','2 months','3 months','6 months','12 months'];
  membershipSelected=this.data.ContainerData.membershipType;

  activeSelected =this.data.ContainerData.isActive;
  Active=["true","false"];

  genderSelected = this.data.ContainerData.gender;
  Gender = ['male','female'];

  ngOnInit(): void {
    console.log(this.data.ContainerData);
  }

  edit(){
    this.member.memberId=this.data.ContainerData.memberId;
    this.member.memberName=this.MemberForm.value.memberName;
    this.member.memberImage=this.MemberForm.value.memberImage;
    this.member.address=this.MemberForm.value.address;
    this.member.phoneNo=this.MemberForm.value.phoneNo;
    this.member.gender=this.genderSelected;
    this.member.isActive=this.activeSelected;
    this.member.membershipType=this.membershipSelected;
    this.date=this.MemberForm.value.membershipStartDate.toLocaleDateString();
    this.member.membershipStartDate=this.datepipe.transform(this.date, 'yyyy-MM-dd') || '';
    console.log(this.member.membershipStartDate);

    this.service.editMember(this.member).subscribe({
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
