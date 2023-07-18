import {Book} from './Book.js';

export addBook(title, author) {
  const newBook = new Book(title, author);
  this.books.push(newBook);
  localStorage.setItem('books', JSON.stringify(this.books));
}