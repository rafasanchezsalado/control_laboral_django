import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base_url = 'http://127.0.0.1:8000/api/'

  constructor(protected http: HttpClient) { }

  get(model) {
    return this.http.get(this.base_url + "" + model + "/");
  }

  create(model, data) {
    return this.http.post(this.base_url + "" + model + "/", data);
  }

  update(id, data) {
    return this.http.put(this.base_url + id, data);
  }

  delete() {
    return this.http.delete(this.base_url + 'employees/3/');
  }

}
