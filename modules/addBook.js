import {Book} from './Book.js';

export addBook(title, author) {
  //import {displayBooks} from './displayBooks';
  
  const newBook = new Book(title, author);
  this.books.push(newBook);
  localStorage.setItem('books', JSON.stringify(this.books));
  // this.displayBooks();
}