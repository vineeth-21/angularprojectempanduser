import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttppostService {

  constructor(private http : HttpClient) { }
  invoke(obj:any) : Observable<any>{
     return this.http.post('/api',obj)
  }
  isLoggedIn(): boolean {
     let flag = localStorage.getItem('isLoggedIn')
     if (flag == "true"){
       return true
     }else{
       return false
     }
  }
  SetEmail(email : any){
    localStorage.setItem("email",email)
  }
  GetEmail(){
    return localStorage.getItem("email")
  }
}
