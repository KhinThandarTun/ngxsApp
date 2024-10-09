import { Component } from '@angular/core';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],  // <-- Add HttpClientModule here
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  employees!: EmployeeModel[];

  constructor(private employeeService: EmployeeService){}

  ngOnInit() : void{
    this.getAllEmployee();
  }

  getAllEmployee()
  {
    this.employeeService.getAllEmployee().subscribe({
      next: (response) => {
        if(response){
          this.employees = response;
        }
      }
    });
  }
}
