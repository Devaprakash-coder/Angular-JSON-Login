import { Component, OnInit, Output } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'self-server';
  show: boolean = false;
  uname:any;
  constructor(public apiservice: ApiserviceService, private router: Router) { }

  ngOnInit() {
   this.uname = localStorage.getItem("uname")
    if(this.uname){
      this.apiservice.postLink = true;
      this.apiservice.signupLink = true;  
    }else{
      this.apiservice.postLink = false; 
      this.apiservice.signupLink = false;
      this.show = false;
    }
  }

  hideLink() {
    this.show = !this.show;
  }

  Logout() {
    this.show = false;
    this.apiservice.postLink = false;
    this.apiservice.signupLink = false;
    localStorage.clear();
    this.router.navigate(['/logIn'])
  }
}