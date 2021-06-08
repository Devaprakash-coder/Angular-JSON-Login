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

  ngOnInit(): void {}

  logIn(luname: string, lpword: any) {
    if (luname == "" && lpword == "" || luname == null && lpword == null) {
      alert("Enter username and password")
    } else {
      this.loginDetails = { luname: luname, lpword: lpword };
      this.apiService.getuser(luname).subscribe((user) => {
        if (user.length == 0) {
          alert("Wrong Username")
        } else {
          for (let index = 0; index < user.length; index++) {
            const element = user[index];
            if (element.pword !== lpword) {
              alert("Wrong Password")
            }
            else {
              localStorage.setItem("uname", element.uname)
              this.apiService.postLink = true;
              this.apiService.signupLink = true;
              this.route.navigate(['/posts']);
            }
          }
        }
      });
    }
  }

}
