import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiserviceService } from '../apiservice.service'
import { Router } from '@angular/router'
import { AppRoutingModule } from '../app-routing/app-routing.module'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails: any = {}
  constructor(private apiService: ApiserviceService, private route: Router) { }

  ngOnInit(): void { }

  logIn(luname: string, lpword: any) {
    if (luname == "" && lpword == "" || luname == null && lpword == null) {
      alert("Enter username and password")
    } else {
      this.loginDetails = { luname: luname, lpword: lpword };
      this.apiService.getuser({ uname: luname }).subscribe((user) => {
        if (!user) {
          alert("Wrong Username")
        } else if (user.pword !== lpword) {
          alert("Wrong Password")
        } else {
          localStorage.setItem("uname", user.uname)
          this.apiService.postLink = true;
          this.apiService.signupLink = true;
          this.route.navigate(['/posts']);
        }
      });
    }
  }
}
