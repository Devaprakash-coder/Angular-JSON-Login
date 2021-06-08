import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { post } from './posts'

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  postLink: boolean = false;
  signupLink: boolean = false;

  getdata(): Observable<any> {
    return this
      .http
      .get(`http://localhost:3000/posts`)
      .pipe(
        map(res => res)
      )
  }

  postdata(data: post) {
    return this
      .http
      .post(`http://localhost:3000/posts`, data)
  }

  editdata(id: number, data: post) {
    return this
      .http
      .put(`http://localhost:3000/posts/${id}`, data)
  }
  deletedata(id: number) {
    return this
      .http
      .delete(`http://localhost:3000/posts/${id}`)
  }

  signUp(user: any) {
    return this
      .http
      .post(`http://localhost:3000/users`, user)
  }

  getuser(uname: string): Observable<any> {
    return this
      .http
      .get(`http://localhost:3000/users?uname=${uname}`)
      .pipe(
        map(res => res)
      )
  }

  myPost(author: any): Observable<any> {
    return this
      .http
      .get(`http://localhost:3000/posts?author=${author}`)
  }
}
