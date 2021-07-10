import { Book } from './models';
import { SearchBookPipe } from './search-book.pipe';

describe('SearchBookPipe', () => {
  const mockBooks: Book[] = [
    new Book({
      title: 'Kaplan DAT',
      subtitle: 'ABC',
      authors: ["Kaplan, Inc"],
      publisher: "Wiley Publishers",
      publishedDate: "2002"
    }),
    new Book({
      title: 'GMAT Prep',
      subtitle: 'ABC',
      authors: ["Kaplan, Inc", "S Chand"],
      publisher: "Kaplan",
      publishedDate: "2004"
    }),
  ];

  it('create an instance', () => {
    const pipe = new SearchBookPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the original book list if no search key provided', () => {
    const pipe = new SearchBookPipe();
    expect(pipe.transform(mockBooks, '')).toBe(mockBooks);
  });

  it('should filter the book list based on search key if key is present in title (case insensitive)', () => {
    const pipe = new SearchBookPipe();
    expect(pipe.transform(mockBooks, 'Gmat')).toEqual([mockBooks[1]]);
  });

  it('should filter the book list based on search key if key is present in one of the authors (case insensitive)', () => {
    const pipe = new SearchBookPipe();
    expect(pipe.transform(mockBooks, 'chand')).toEqual([mockBooks[1]]);
  });

  it('should filter the book list based on search key if key is present in publisher (case insensitive)', () => {
    const pipe = new SearchBookPipe();
    expect(pipe.transform(mockBooks, 'WILEY')).toEqual([mockBooks[0]]);
  });

  it('should filter the book list based on search key if key is present in either title, one of the authors or publisher (case insensitive)', () => {
    const pipe = new SearchBookPipe();
    expect(pipe.transform(mockBooks, 'kaplan')).toEqual(mockBooks);
  });

  it('should return empty list if search key is not present in either title, one of the authors or publisher (case insensitive)', () => {
    const pipe = new SearchBookPipe();
    expect(pipe.transform(mockBooks, 'gre')).toEqual([]);
  });
});
