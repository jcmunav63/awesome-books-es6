export removeBook(book) {
  import {displayBooks} from './displayBooks';
  this.books = this.books.filter((b) => b !== book);
  localStorage.setItem('books', JSON.stringify(this.books));
  this.displayBooks();
}