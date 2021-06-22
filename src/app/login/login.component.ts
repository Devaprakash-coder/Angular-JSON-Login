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
  result: any;
  constructor(private apiService: ApiserviceService, private route: Router) { }

  ngOnInit(): void { }

  logIn(luname: string, lpword: any) {
    if (luname == "" && lpword == "" || luname == null && lpword == null) {
      alert("Enter username and password")
    } else {
      this.loginDetails = { luname: luname, lpword: lpword };
      this.apiService.getuser({ luname, lpword }).subscribe((user) => {
        user.forEach((element: any) => {
          if (element.uname === luname && element.pword === lpword) {
            this.result = element;
          }
        });
        if (this.result) {
          localStorage.setItem("uname", this.result.uname)
          this.apiService.postLink = true;
          this.apiService.signupLink = true;
          this.route.navigate(['/posts']);
        } else {
          alert("Entered wrong")
        }
      });
    }
  }
}
