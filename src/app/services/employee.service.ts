import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8081/api/employees'; 

  constructor(private http: HttpClient) {}


    addEmployee(data:any):Observable<any>{
    return this.http.post(this.apiUrl,data);
  }
  UpdateEmployee(id:number,data:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/update/${id}`,data);
  }
  getEmployeeList():Observable<any>{
    return this.http.get(`${this.apiUrl}/all`);
  }
  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
