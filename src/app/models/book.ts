import { BookVolumeInfo } from "./book-list-response";

export class Book {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;

    constructor({ title, authors, publisher, publishedDate }: BookVolumeInfo) {
        this.title = title;
        this.authors = authors;
        this.publisher = publisher;
        this.publishedDate = publishedDate;
    }
}