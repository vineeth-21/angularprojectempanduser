import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';
import { LoginComponent } from './login/login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserupdateComponent } from './userupdate/userupdate.component';

const routes: Routes = [
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'employeedetails',component:EmployeedetailsComponent},
  {path:'employeeupdate/:empid',component:EmployeeupdateComponent},
  {path :'addemployee',component:AddemployeeComponent},
  {path : 'userdetails',component:UserdetailsComponent},
  {path :'userupdate/:emailid',component:UserupdateComponent},
  {path :'adduser',component: AdduserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
