import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base_url = 'http://127.0.0.1:8000/api/'

  constructor(protected http: HttpClient) { }

  getUsers() {
    return this.http.get(this.base_url + 'users/');
  }

  getEmployees() {
    return this.http.get(this.base_url + 'employees/');
  }

  getHolidays() {
    return this.http.get(this.base_url + 'holidays/');
  }

}
