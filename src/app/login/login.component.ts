import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { LoginService } from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private route:Router, private LoginDetails:LoginService) { }

  ngOnInit() {
  }
  log:any = {};
  login(log:any){
    this.LoginDetails.setLoginData(log);
    this.route.navigate(['/home']);
  }
  getData(){
    this.log = this.LoginDetails.getLoginData();
  }
}
