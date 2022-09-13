import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Service } from 'src/app/services/Services';

@Component({
  selector: 'app-member-delete',
  templateUrl: './member-delete.component.html',
  styleUrls: ['./member-delete.component.css']
})
export class MemberDeleteComponent implements OnInit {
  memId=this.data.ContainerData.memberId;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,private service : Service,public dialogRef : MatDialogRef<MemberDeleteComponent>
  ) { }

  ngOnInit(): void {
  }

  delete(){
    this.deleteTheMember(this.memId);
  }

  deleteTheMember(id : number){
    this.service.deleteMember(id).subscribe({
      next : (res) => {
        console.log(res);
        if(res==true){
          alert("Deleted Successfully");
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
