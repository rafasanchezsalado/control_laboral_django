import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean;

  constructor(protected userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.userService.get("users").subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
      });
  }

  createUser(data) {
    this.userService.create("users", data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  updateUser() { }

  deleteUser() {
    this.userService.delete().subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

}
