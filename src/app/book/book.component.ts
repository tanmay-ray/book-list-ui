import { Component, Input } from '@angular/core';
import { Book } from '../models';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book: Book;
}
