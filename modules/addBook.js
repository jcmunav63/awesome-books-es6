export addBook(title, author) {
  import {displayBooks} from './displayBooks';
  import {Book} from './Book.js';
  const newBook = new Book(title, author);
  this.books.push(newBook);
  localStorage.setItem('books', JSON.stringify(this.books));
  this.displayBooks();
}