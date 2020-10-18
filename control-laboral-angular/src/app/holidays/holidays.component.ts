import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { UserService } from '../user.service';

export interface NationalHolidays {
  position: number,
  name: string;
  date: string;
}

const ELEMENT_DATA: NationalHolidays[] = [
  { position: 1, name: "New Year's Day", date: 'January 1' },
  { position: 2, name: 'Epiphany', date: 'January 6' },
  { position: 3, name: 'Maundy Thursday', date: 'April 9' },
  { position: 4, name: 'Good Friday', date: 'April 10' },
  { position: 5, name: 'Labour Day', date: 'May 1' },
  { position: 6, name: 'Assumption', date: 'August 15' },
  { position: 7, name: 'National Day', date: 'October 12' },
  { position: 8, name: 'All Saints Day', date: 'November 1' },
  { position: 9, name: 'Constitution Day', date: 'December 6' },
  { position: 10, name: 'Immaculate Conception', date: 'December 8' },
  { position: 11, name: 'Christmas Day', date: 'December 25' },
];

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements AfterViewInit {

  title = 'Holidays';
  holidays: any = [];
  dataSource = new MatTableDataSource<any>(this.holidays);

  displayedColumns: string[] = ['position', 'name', 'date'];
  nationalHolidays = ELEMENT_DATA;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(protected userService: UserService) { }

  ngAfterViewInit(): void {
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }

    return '';
  }

    /*  CRUD Methods */

    createHoliday(data) {
      this.userService.create("holidays", data).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
    }

    updateHoliday() {}
  
    deleteHoliday() {
      this.userService.delete().subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
    }

}
