import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private data = {};  
  constructor(
    private http:HttpClient,
  ) { }
  setLoginData(ldata:any) {  
    this.data= ldata;  
  }  
  
  getLoginData() {  
    return this.data
  }  

 
}
