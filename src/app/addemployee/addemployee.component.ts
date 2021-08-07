import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttppostService } from '../httppost.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  emp: any = {};
  constructor(public service : HttppostService,public route: Router,public toast : ToastrService) { }
  public submitted: boolean = false;
  heading : string= 'Add Employee';
  ngOnInit(): void {
  }
  submit(employeeDetailsForm:any){
if(employeeDetailsForm.valid){
  this.submitted=true;
  let obj = {
    "id":"1","jsonrpc":"2.0","method":"rpcService.AddEmployee","params":[
      this.emp
    ]}
    this.service.invoke(obj).subscribe((result:any)=>{
      if (result.result.error==null){
        this.toast.success(result.result.Result)
          this.route.navigate(["./employeedetails"])
          
      }
      else{
        this.toast.error(result.result.error)
        this.route.navigate(["./employeedetails"])
       
      }
    })
}else{
  for(const i in employeeDetailsForm.controls){
    if (employeeDetailsForm.controls[i]){
      employeeDetailsForm.controls[i].marksAsTouched();
    }
  }
}
  }

}
