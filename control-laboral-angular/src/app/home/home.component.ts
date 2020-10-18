import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

import { UserService } from '../user.service';

export interface Users {
  id: number;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Users';
  users: any = [];
  dataSource = new MatTableDataSource<any>(this.users);

  displayedColumns: string[] = ['id', 'name'];

  constructor(protected userService: UserService) { }

  ngOnInit(): void {

/*     this.userService.get("users")
      .subscribe(
        (data) => {
          this.users = data;
        },
        (error) => {
          console.error(error);
        }
      ); */

  }

}
