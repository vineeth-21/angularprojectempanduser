import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import {MatInputModule} from '@angular/material/input';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttppostService } from './httppost.service';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { DialogemployeeComponenet,EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { InterceptorInterceptor } from './interceptor.interceptor';
import {MatTableModule} from '@angular/material/table';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ToastrModule } from 'ngx-toastr';
import {   MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeedetailsComponent,
    EmployeeupdateComponent,
    DialogemployeeComponenet,
    AddemployeeComponent,
    UserdetailsComponent,
    UserupdateComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    ToastrModule.forRoot()

  ],
  providers: [HttppostService,[{
    provide : HTTP_INTERCEPTORS,
    useClass : InterceptorInterceptor,
    multi : true
  }]],
  bootstrap: [AppComponent]
})
export class AppModule { }
