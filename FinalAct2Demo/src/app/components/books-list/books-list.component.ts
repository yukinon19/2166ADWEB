import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from './../../service/crud.service';
import { MatSort } from '@angular/material/sort';
import { SnackbarService } from 'src/app/snackbar.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort = {} as MatSort;

  Books: any = [];

  constructor(private crudService: CrudService, private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.crudService.GetBooks().subscribe(res => {
      console.log(res)
      this.Books = res;
    });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteBook(id).subscribe((res) => {
        this.Books.splice(i, 1);
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackbarService.showSnackbar(message, action);
  }

  sortData(event: any) {
    const data = this.Books.slice();
    if (event.active === 'price') {
      // Sort numeric data
      if (event.direction === 'asc') {
        this.Books = data.sort((a: any, b: any) => a[event.active] - b[event.active]);
      } else if (event.direction === 'desc') {
        this.Books = data.sort((a: any, b: any) => b[event.active] - a[event.active]);
      }
    } else {
      // Sort string data for other columns
      if (event.direction === 'asc') {
        this.Books = data.sort((a: any, b: any) => a[event.active].localeCompare(b[event.active]));
      } else if (event.direction === 'desc') {
        this.Books = data.sort((a: any, b: any) => b[event.active].localeCompare(a[event.active]));
      }
    }
  }
  
}
