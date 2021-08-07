import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("entered into interceptor")
    console.log("KEY in interceptor",localStorage.getItem('key'))
    var newReq = request.clone({headers : new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' :"Bearer "+localStorage.getItem('key')
    })})
    return next.handle(newReq);
  }
}
