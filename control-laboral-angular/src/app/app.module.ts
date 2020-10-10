import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

import { UserService } from './user.service';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'schedules', component: SchedulesComponent },
  { path: 'holidays', component: HolidaysComponent },
  { path: 'settings', component: SettingsComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeesComponent,
    SchedulesComponent,
    HolidaysComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    MatTableModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
