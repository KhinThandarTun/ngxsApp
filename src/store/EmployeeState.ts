import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { EmployeeComponent } from "../pages/employee/employee.component";
import { EmployeeService } from "../services/employee.service";
import { response } from "express";
import { tap } from "rxjs";
import { EmployeeModel } from "../models/employee.model";

export class GetAllEmployee{
    static readonly type = '[Employee] Get All';
}

export interface EmployeeStateModel{
    employees : EmployeeModel[];
}

@State<EmployeeStateModel>({
    name: 'Employee',
    defaults: {
        employees: []
    }
})

@Injectable()
    export class EmployeeState{
        constructor(private employeeService: EmployeeService){}

        @Selector()
        static SelectEmployee(state: EmployeeStateModel){
            return state.employees; 
        }

        @Action(GetAllEmployee)
        getAllEmployee(ctx: StateContext<EmployeeStateModel>){
           return this.employeeService.getAllEmployee().pipe(
            tap((response) => {
                const state = ctx.getState();
                ctx.setState({
                    ...state,
                    employees:response
                  });
            })
           )
        }
    }