import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http: HttpClient) { }

  /* getUsers() {
      return this.http.get('https://randomuser.me/api/?results=5');
    } */

  getEmployees() {
    return this.http.get('http://127.0.0.1:8000/api/employees/');
  }
}
