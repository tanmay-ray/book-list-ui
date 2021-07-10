import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { Book, BookListResponse } from './models';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getBookList(): Observable<Book[]> {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep';
    return this.httpClient.get<BookListResponse>(url).pipe(
      mergeMap(bookList => from(bookList.items)), map(book => new Book(book.volumeInfo)), toArray());
  }

}
