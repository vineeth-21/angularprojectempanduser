import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttppostService } from '../httppost.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
 title : string="Add user"
 user:any={}
  constructor(public service : HttppostService,public router : Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  submit(userdetails:any){
    console.log("checking",userdetails)
    console.log("checking", this.user)
    if (userdetails.valid) {
     
      let obj = {"id":"1","jsonrpc":"2.0","method":"rpcService.AddUser","params":[
       this.user
  ]}
    this.service.invoke(obj).subscribe(result  => {
     console.log(result)
     if (result.error == null){
        this.toastr.success('added successfully');
     }else{
        this.toastr.error(result.error)
     }
       this.router.navigate(['/userdetails'])
    
  })
   } else {
     for (const i in userdetails.controls) {
           if (userdetails.controls[i]) {
            userdetails.controls[i].markAsTouched();
           }
       }
   }
 }
  }


