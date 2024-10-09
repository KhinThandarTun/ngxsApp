import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl = "https://localhost:7174/api/employee";
  constructor(private http: HttpClient) { }

  getAllEmployee() : Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(`${this.apiUrl}`).pipe(
      // tap((orders: OrderModel[]) => { console.log('Fetch orders:', orders) })
    );
  }
}
