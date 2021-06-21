import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  private bookList: string[] = [];

  constructor() {
    this.bookList.push('Henri Pottier');
  }

  ngOnInit(): void {
    this.bookList.push('Henri Pottier 2');
  }
}
