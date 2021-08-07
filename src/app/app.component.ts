import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { HttppostService } from './httppost.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : any
   constructor(public router : Router,public service: HttppostService){}
   logout(){
     this.router.navigate([`./login`])
   }
   employeedetails(){
     this.router.navigate(['./employeedetails'])
   }
   userdetails(){
         this.router.navigate(['./userdetails'])
   }
}
