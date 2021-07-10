import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookService } from './book.service';
import { Book, BookListResponse } from './models';

describe('BookService', () => {
  let service: BookService;
  let httpMock: HttpTestingController;

  const mockResponse: BookListResponse = {
    kind: 'xyz',
    items: [
      {
        id: '1',
        volumeInfo: {
          title: 'Kaplan DAT',
          subtitle: 'ABC',
          authors: ["Kaplan, Inc"],
          publisher: "Kaplan",
          publishedDate: "2002"
        }
      },
      {
        id: '2',
        volumeInfo: {
          title: 'Kaplan DAT',
          subtitle: 'ABC',
          authors: ["Kaplan, Inc"],
          publisher: "Kaplan",
          publishedDate: "2004"
        }
      }
    ]
  };

  const mockBooks: Book[] = [
    new Book({
      title: 'Kaplan DAT',
      subtitle: 'ABC',
      authors: ["Kaplan, Inc"],
      publisher: "Kaplan",
      publishedDate: "2002"
    }),
    new Book({
      title: 'Kaplan DAT',
      subtitle: 'ABC',
      authors: ["Kaplan, Inc"],
      publisher: "Kaplan",
      publishedDate: "2004"
    }),
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch books', () => {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep';
    service.getBookList().subscribe(res => expect(res).toEqual(mockBooks));
    const req = httpMock.expectOne(url);
    req.flush(mockResponse);
    expect(req.request.method).toBe('GET');
  });
});
