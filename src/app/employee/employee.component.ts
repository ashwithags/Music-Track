import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
emp:any =[];
Newemp:any ={};
errorOj:any ={};
editEmp:any ={};
hideAddnewModal:boolean = true;
hideEditnewModal:boolean = true;
SortOptions:any =['employee_age','employee_salary'];
show:boolean;
name:string;
message: string;
ms:string;


  constructor(
    private empList:EmployeeService,
  ) { }

  ngOnInit() {
     this.empList.getEmployees().subscribe(
      data => this.emp = data.data,
      error => this.errorOj = error
     )
  }
  ngOnChanges(){

  }
  courseReg(courseName: string) {
    this.message= `Your registration for ${courseName} is successful`;
  }
  
  deleteEmployee(id:number){
    this.empList.deleteEmployee(id).subscribe(
      data =>{
        console.log("deleted");
      this.ms= data.message;
    });
  }

  editEmployee(id:number,emp:any){
    this.hideEditnewModal = false;
    this.editEmp.id = emp.id;
    this.editEmp.name = emp.employee_name;
    this.editEmp.salary = emp.employee_salary;
    this.editEmp.age = emp.employee_age;
  }

  updateEmployee(id:number,emp:any){
    this.empList.editEmployee(id,emp).subscribe(
      data =>{
        this.hideEditnewModal = true;
        this.ms= data.message;
      }
    );
  }

  OpenAddnew(){
    this.hideAddnewModal = false;
    this.Newemp = {};
  }
  AddNew(Newemp){
    this.empList.Add(Newemp).subscribe(
      data => {
        this.emp.push(data.data);
        this.hideAddnewModal = true;
        this.ms= data.message;

      },
      
      error => {
        this.errorOj = error;
        this.ms= error.message;
      }
      );
    
  }

}
