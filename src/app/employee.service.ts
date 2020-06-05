import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private getUrl:string = "http://dummy.restapiexample.com/api/v1/employees";
  private delUrl:String = "http://dummy.restapiexample.com/api/v1/delete/";
  private addUrl:string = "http://dummy.restapiexample.com/api/v1/create";
  private editUrl:string = "http://dummy.restapiexample.com/api/v1/update/";
  private quoteUrl:string = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";


  constructor(private http:HttpClient) { }

  getEmployees():Observable<any>{
    return this.http.get<any>(this.getUrl)
  }

  deleteEmployee(id):Observable<any>{
    return this.http.delete<any>(this.delUrl+id).pipe(
      catchError(this.handleError)
    );
  }

  editEmployee(id,emp):Observable<any>{
    return this.http.put<any>(this.editUrl+id, emp).pipe(
      catchError(this.handleError)
    );
  }

  Add(emp:any):Observable<any>{
    return this.http.post<any>(this.addUrl,emp).pipe(
      catchError(this.handleError)
    );
  }
  
  getQuotes():Observable<any>{
    return this.http.get<any>(this.quoteUrl);
   }

  handleError(err: HttpErrorResponse){
    console.log(`Backend returned code ${err.status}`);
    console.log(err);
    return throwError(err);
  }

}
