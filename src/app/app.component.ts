import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from "../pages/employee/employee.component";
import { EmployeeModel } from '../models/employee.model';
import { Observable } from 'rxjs';
import { EmployeeState, GetAllEmployee } from '../store/EmployeeState';
import { Select, Store } from '@ngxs/store';
import { EmployeeService } from '../services/employee.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeComponent, CommonModule], // <-- Add HttpClientModule to imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngxsApp';
  totalEmployees: number = 0;
  employee$: Observable<EmployeeModel[]> = inject(Store).select(EmployeeState.SelectEmployee);
  constructor(private store: Store, private employeeService: EmployeeService) {}

  ngOnInit() : void{
    // this.getAllEmployee();

    this.employee$.subscribe({
      next:(employees) => {
        if(!employees.length){
          this.store.dispatch(new GetAllEmployee())
        }
        this.totalEmployees = employees.length;
      }
    })
  }

  getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe({
      next: (response) => {
        if(response){
          this.totalEmployees = response.length;
        }
      }

    })
  }

  onShowData() {
    this.employeeService.getAllEmployee().subscribe({
      next: (response) => {
        if(response){
          this.totalEmployees = response.length;
        }
      }
    })
  }

}

