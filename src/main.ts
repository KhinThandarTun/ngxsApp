import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { NgxsModule, provideStore } from '@ngxs/store';
import { AppComponent } from './app/app.component';
import { EmployeeState } from './store/EmployeeState';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app/app.routes';
import { provideZoneChangeDetection } from '@angular/core';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
