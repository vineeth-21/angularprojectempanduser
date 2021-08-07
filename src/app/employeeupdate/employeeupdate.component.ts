import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttppostService } from '../httppost.service';

@Component({
  selector: 'app-employeeupdate',
  templateUrl: './employeeupdate.component.html',
  styleUrls: ['./employeeupdate.component.css']
})
export class EmployeeupdateComponent implements OnInit {
  name : string = "Update Employee"
   employee:any={}
  constructor(public router : Router,public route: ActivatedRoute,public service : HttppostService,public toast : ToastrService) { }

  ngOnInit(): void {
    this.fetch(this.route.snapshot.paramMap.get('empid'))
    console.log("checking fetch",this.route.snapshot.paramMap.get('empid'))
  }
  fetch(id:any){
    console.log("checking in update employee",id)
     let obj = {
       "id":"1","jsonrpc":"2.0","method":"rpcService.GetEmployeeById","params":[{"empid":id}]
     }
     this.service.invoke(obj).subscribe(result =>{
    this.employee=result.result
    console.log(this.employee)
     })

  }
  update(){
    let obj ={
      "id":"1","jsonrpc":"2.0","method":"rpcService.UpdateEmployee","params":[this.employee]
    }
    this.service.invoke(obj).subscribe(result=>{
      console.log(result)
      if (result.result.error==null){
        this.toast.success(result.result.Result)
      }else{
        this.toast.error(result.result.error)
      }
      this.router.navigate(['./employeedetails'])
    })
  }

}
