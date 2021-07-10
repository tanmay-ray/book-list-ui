import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';
import { Book } from '../models';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookList$: Observable<Book[]>;
  searchKey: string;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookList$ = this.bookService.getBookList();
  }

}
