import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { NgxsModule, provideStore } from '@ngxs/store';
import { EmployeeState } from '../store/EmployeeState';

export const appConfig: ApplicationConfig = {
  providers:
   [ 
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideStore(
      [EmployeeState]
    ),
    importProvidersFrom(HttpClient,NgxsModule.forRoot([EmployeeState])) 
    ]
};
