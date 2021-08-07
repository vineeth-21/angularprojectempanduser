import { ViewChild } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttppostService } from '../httppost.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
   name : string = "EMPLOYEE DETAILS"
   @ViewChild(MatSort) sort!: MatSort;
  constructor(public service : HttppostService,public dialog:MatDialog,public route: Router) { }
    empdetails : any=[];
     totalcount : any
    displayedColumns : string[]=['empid','designation','projectname','salary','experience','dateofjoining','action'];
    dataSource = new MatTableDataSource();
    @ViewChild(MatPaginator) paginator!: MatPaginator;
   
  ngOnInit(): void {
    this.fetch(0,5)
    
  }
   
  applyFilter(event: Event) {
    console.log("event",event)
    const filterValue = (event.target as HTMLInputElement).value;
    console.log("filtervalue",filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onPagination(event:any) {
    console.log("Pagination Event : ", event);
    this.fetch(event.pageIndex, event.pageSize);
  }
  fetch(pageIndex:any,pageSize:any){
    let obj = {"id":"1","jsonrpc":"2.0","method":"rpcService.EmployeePagination","params":[{
      "page" : pageIndex+1,
      "size" : pageSize
    }]}
    this.service.invoke(obj).subscribe(result=>{
      console.log(result.result.Employees)
      this.empdetails= result.result.Employees
      this.totalcount = result.result.Count
      this.dataSource=new MatTableDataSource(this.empdetails)
     // this.dataSource.paginator = this.paginator
     this.dataSource.sort = this.sort;
      console.log("empdetails",this.empdetails)
    })
  }
  addemployee(){
    console.log("entered into add employee")
    this.route.navigate(["./addemployee"])
  }
  delete(id:any){
    console.log("empid",id)
    const dialogRef = this.dialog.open(DialogemployeeComponenet,{
      height :'400px',
      width :'600px',
      data :{delete : id}

    });
    

  }

}
 
@Component({
  selector :'app-dialogemployee',
  templateUrl : './dialogemployee.html',
})
export class DialogemployeeComponenet{
     constructor(public service : HttppostService,public dialogRef : MatDialogRef<any>,
      @Inject(MAT_DIALOG_DATA)public data : any
      ){}
      onNoClick(): void{
        this.dialogRef.close();
      }
      deleting(data:any){
        console.log("entered into deleting method",data)
        let obj ={
          "id":"1","jsonrpc":"2.0","method":"rpcService.DeleteEmpById","params":[{
            "empid":data
          }]
        }
        this.service.invoke(obj).subscribe((result:any)=>{
          console.log(result)
          this.dialogRef.close()
        })
      }

}
 

