// Import HttpClientModule
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { EmployeeState } from '../store/EmployeeState';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
