import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logDetail:any;

  constructor(private DispalyLogin:LoginService) { }

  ngOnInit() {
   
   this.logDetail =  this.DispalyLogin.getLoginData();
 
  }

}
