import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BookService } from '../book.service';
import { Book } from '../models';
import { SearchBookPipe } from '../search-book.pipe';

import { BookListComponent } from './book-list.component';

const mockBooks: Book[] = [
  {
    title: 'Kaplan DAT',
    authors: ["Kaplan, Inc"],
    publisher: "Kaplan",
    publishedDate: "2002"
  },
  {
    title: 'Kaplan DAT',
    authors: ["Kaplan, Inc"],
    publisher: "Kaplan",
    publishedDate: "2004"
  }
];

class MockService {
  getBookList() { return of(mockBooks); }
}

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent, SearchBookPipe],
      providers: [{ provide: BookService, useClass: MockService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load book list', () => {
    expect(component.bookList$).toBeTruthy();
    component.bookList$.subscribe(res => expect(res).toBeTruthy());
  });
});
