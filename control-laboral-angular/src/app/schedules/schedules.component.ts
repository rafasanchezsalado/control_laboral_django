import { Component, AfterViewInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

import { UserService } from '../user.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements AfterViewInit {

  title = 'Schedules';
  schedules: any = [];
  dataSource = new MatTableDataSource<any>(this.schedules);

  constructor(protected userService: UserService) { }

  ngAfterViewInit(): void {
  }

      /*  CRUD Methods */

      createSchedule(data) {
        this.userService.create("schedules", data).subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          });
      }
  
      updateSchedule() {}
    
      deleteSchedule() {
        this.userService.delete().subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          });
      }

}
