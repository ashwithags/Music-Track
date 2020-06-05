import { Component, OnInit } from '@angular/core';
import { Course } from './course';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  SortOptions:any =['employee_age','employee_salary'];
  show:boolean;
  name:string;
  message: string;
  
  course = new Course(1, 'Angular', '5 days');
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

  courseReg(courseName: string) {
    this.message = `Your registration for ${courseName} is successful`;
  }
  

}
