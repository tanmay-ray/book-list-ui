import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './models';

@Pipe({
  name: 'searchBook'
})
export class SearchBookPipe implements PipeTransform {

  transform(value: Book[], searchKey: string): Book[] {
    if(!searchKey) return value;
    return value.filter(book => `${book.title}|${book.publisher}|${book.authors}`.toUpperCase().includes(searchKey.toUpperCase()));
  }

}
