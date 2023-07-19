import Book from './Book.js';

/* eslint-disable no-use-before-define */
const addBook = (title, author) => {
  const newBook = new Book(title, author);
  this.books.push(newBook);
  localStorage.setItem('books', JSON.stringify(this.books));
};

export default addBook;