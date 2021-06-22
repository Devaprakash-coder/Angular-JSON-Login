import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { post } from './posts'
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  postLink: boolean = false;
  signupLink: boolean = false;
url = "https://mongo-login-app.herokuapp.com/"
  getdata(): Observable<any> {
    return this
      .http
      .get(`${this.url}posts`)
      .pipe(
        map(res => res)
      )
  }

  postdata(data: post) {
    return this
      .http
      .post(`${this.url}posts`,data)
  }

  editdata(id: any, data: post) {
    var id = id;
    return this
      .http
      .put(`${this.url}posts/update/${id}`, data)
  }
  deletedata(id: any) {
    var id = id;
    return this
      .http
      .delete(`${this.url}posts/delete/${id}`)
  } 
  signUp(user: any) {
    return this
      .http
      .post("${this.url}user",user)
  }

  getuser(unames: any): Observable<any> {
    var uname = unames;    
    return this
      .http
      .put(`${this.url}users`,unames)
      .pipe(
        map(res => res)
      )
  }

  myPost(author: any): Observable<any> {
    return this
      .http
      .get(`${this.url}posts?author=${author}`)
  }
}
