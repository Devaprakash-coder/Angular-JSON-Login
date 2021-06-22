import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users = {};
  show: boolean = true;
  newUser: any;
  constructor(private apiservice: ApiserviceService, private route: Router) { }

  ngOnInit(): void { }

  signup(uname: string, pword: any) {
    if (uname == "" || pword == "") {
      alert("Enter username and password")
    } else {
      this.apiservice.getuser(uname).subscribe((username) => {
        username.forEach((element: any) => {
          if (element.uname === uname) {
            this.newUser = element;
          }
        });
        if (this.newUser == null) {
          this.users = { "uname": uname, 'pword': pword };
          this.apiservice.signUp(this.users).subscribe();
          this.route.navigate(['/logIn'])
          alert("Registered Successfully");
        }
        else {
          alert("Username Already Exist")
          this.newUser = null;
        }
      });
    }
  }
}