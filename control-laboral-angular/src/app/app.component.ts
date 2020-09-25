import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Control Laboral';
  employees: any[] = [];
  // users: any[] = [];

   constructor(
    protected userService: UserService
  ) {
  } 

/*   ngOnInit() {
    this.userService.getUsers()
      .subscribe(
        (data) => {
          this.users = data['results'];
        },
        (error) => {
          console.error(error);
        }
      );
  } */
  ngOnInit() {
    this.userService.getEmployees()
      .subscribe(
        (data) => {
          this.employees = data['employees'];
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
