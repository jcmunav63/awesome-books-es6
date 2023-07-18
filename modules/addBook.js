import { Book } from './Book.js';

export function addBook(title, author) {
  const newBook = new Book(title, author);
  this.books.push(newBook);
  localStorage.setItem('books', JSON.stringify(this.books));
}