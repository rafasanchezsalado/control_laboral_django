import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {

  title = 'Control Laboral';
  employees: any = [];

  constructor(
    protected userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getEmployees()
      .subscribe(
        (data) => {
          this.employees = data;
        },
        (error) => {
          console.error(error);
        }
      );
  }

}
