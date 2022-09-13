import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Member } from 'src/app/class/Member';
import { Service } from 'src/app/services/Services';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  minDate=new Date(2022,7,1);
  date : string;
  member : Member=new Member();
  MemberForm =new FormGroup({
    membershipStartDate : new FormControl(),
    memberName : new FormControl('',Validators.required),
    memberImage : new FormControl('',Validators.required),
    address : new FormControl('',Validators.required),
    phoneNo : new FormControl()
  });

  memberType =['1 month','2 months','3 months','6 months','12 months'];
  membershipSelected=this.memberType[0];

  Active=["true","false"];
  activeSelected=this.Active[1];

  Gender = ['male','female'];
  genderSelected = this.Gender[0];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,private service : Service,public dialogRef : MatDialogRef<AddMemberComponent>,public datepipe : DatePipe
  ) { }

  ngOnInit(): void {
  }

  save(){

    this.member.memberName=this.MemberForm.value.memberName!;
    this.member.memberImage=this.MemberForm.value.memberImage!;
    this.member.address=this.MemberForm.value.address!;
    this.member.phoneNo=this.MemberForm.value.phoneNo;
    this.member.gender=this.genderSelected;
    this.member.isActive=this.activeSelected;
    this.member.membershipType=this.membershipSelected;
    this.date=this.MemberForm.value.membershipStartDate.toLocaleDateString();
    this.member.membershipStartDate=this.datepipe.transform(this.date, 'yyyy-MM-dd') || '';

    this.service.addMember(this.member).subscribe({
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
