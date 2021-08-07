import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttppostService } from '../httppost.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
title : string ="UserDetails"
  constructor(public service : HttppostService,private router:Router,public dialog : MatDialog) { }
userDetails : any=[];
@ViewChild(MatSort) sort!: MatSort;

dataSource = new MatTableDataSource<any>(this.userDetails)
displayedColumns : string[]=['emailid','role','status','name','Action']
@ViewChild(MatPaginator)
paginator !: MatPaginator
  ngOnInit(): void {
    let obj = {"id":"1","jsonrpc":"2.0","method":"rpcService.GetUser","params":[]}
    this.service.invoke(obj).subscribe((result : any)=>{
      console.log(result)
      this.userDetails=result.result
      this.dataSource= new MatTableDataSource(this.userDetails)
      console.log("userDetails",this.userDetails)
      this.dataSource.paginator=this.paginator
     // this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
   
  }
  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
   
  remove(id:any){
      console.log("element:"+id)
      const dialogRef = this.dialog.open(DialoguserComponent,{
        height :'400px',
        width:'600px',
        data :{delete : id}
      })
  }

}
@Component({
  selector: 'app-dialoguser',
  templateUrl: './dialoguser.html',

})
export class DialoguserComponent {

  data: any;
  delete: any;
  constructor(public httppost:HttppostService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data1: any,) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  deleting(data: any) {
    console.log("welcome to deleting method")
    console.log("hello")
     
  
    let obj = {
      "id": "1", "jsonrpc": "2.0", "method": "rpcService.DeleteUserByEmail", "params": [{
        "Emailid": data
      }]
    }
      this.httppost.invoke(obj).subscribe((result :any)=>{

      console.log(result)
      this.dialogRef.close()
    }
    )

  }

}
