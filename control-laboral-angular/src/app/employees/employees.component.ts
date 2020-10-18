import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { EmailValidator, FormControl, Validators } from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { UserService } from '../user.service';

export interface Employees {
  id: number;
  name: string;
  nif: string;
  email: EmailValidator;
  date_birth: Date;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements AfterViewInit {

  title = 'Employees';
  employees: any = [];
  dataSource = new MatTableDataSource<any>(this.employees);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'nif', 'email', 'date_birth', 'actions'];

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(protected userService: UserService, public dialog: MatDialog) {
  }

  ngAfterViewInit() {

    this.userService.get("employees")
      .subscribe(
        (data) => {
          this.employees = data;
        },
        (error) => {
          console.error(error);
        }
      );

    this.dataSource.paginator = this.paginator;

  }

  /*  Filter method */

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /*  Open dialog methods */

  openEditDialog() {
    const dialogRef = this.dialog.open(EditDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  /*  CRUD Methods */

  createEmployee(data) {
    this.userService.create("employees", data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  updateEmployee() {}

  deleteEmployee() {
    this.userService.delete().subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

}

/*  Dialog Components */

@Component({
  selector: 'edit-dialog',
  templateUrl: './dialogs/edit-dialog.html',
})
export class EditDialog { }

@Component({
  selector: 'delete-dialog',
  templateUrl: './dialogs/delete-dialog.html',
})
export class DeleteDialog { }
