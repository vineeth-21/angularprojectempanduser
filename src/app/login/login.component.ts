 
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {   Router } from '@angular/router';
import { HttppostService } from '../httppost.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email = new FormControl('',[Validators.required,Validators.email])
    getErrorMessage(){
      if (this.email.hasError('required')){
          return 'you must enter a value'
      }
      return this.email.hasError('email')?'Not a valid email':'';
    }
    hide = true;
  constructor(public service : HttppostService,private router:Router) { }
  title = "LOGIN"
  emailid : any;
  loginpassword : any;
   
  ngOnInit(): void {
     localStorage.clear()
  }
  login(){
    let obj= {"id":"1","jsonrpc":"2.0","method":"rpcService.Login","params":[{
      "emailid" : this.emailid,
      "password" :this.loginpassword
    }]}
    
    this.service.invoke(obj).subscribe((result:any)=>{
      this.service.SetEmail(this.emailid)
       localStorage.setItem('key',result.result.Key)
       localStorage.setItem('isLoggedIn', "true");
       this.router.navigate(['./employeedetails'])
    })
  }
  
  

}
