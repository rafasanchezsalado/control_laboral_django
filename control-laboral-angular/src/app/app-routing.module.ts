import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'settings', component: SettingsComponent },
    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    declarations: [
        LoginComponent,
        HomeComponent,
        EmployeesComponent,
        SettingsComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        CommonModule
    ],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule { }