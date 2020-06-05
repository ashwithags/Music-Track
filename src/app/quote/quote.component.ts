import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:any = [];
quot:any;
colors:any = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
bgColor:string = "#472e32";

  constructor(
    private quote:EmployeeService,

  ) { }

  ngOnInit() {
    this.quote.getQuotes().subscribe(
      data => {
        this.quotes = data;
        this.quot = this.quotes.quotes[0];
      }
    )
  }

  newQuote(){
   let a = this.quotes.quotes.length;
   let b = Math.floor(Math.random() * a) + 1  ;
   this.quot = this.quotes.quotes[b];
  
   let c = Math.floor(Math.random()* this.colors.length)+1;
   this.bgColor = this.colors[c];
  }

}
