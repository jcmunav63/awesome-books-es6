/* eslint-disable no-use-before-define */
import Book from './Book.js';

export default class BookCollection2 {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.displayedBooks = document.getElementById('displayedBooks');
    const addBtn = document.getElementById('addBtn');

    addBtn.addEventListener('click', () => {
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const section2 = document.getElementById('section2');
      const section3 = document.getElementById('section2');
      const section4 = document.getElementById('section2');
      this.addBook(title, author);
      section2.style.display = 'block';
      section3.style.display = 'none';
      section4.style.display = 'none';
      const formElement = document.getElementById('form');
      formElement.reset();
    });
  }

  displayBooks() {
    const displayedBooks = document.getElementById('displayedBooks');
    displayedBooks.innerHTML = '';
    let i = 0;
    this.books.forEach((book, index) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <p>"${book.title}"&nbsp;by&nbsp;${book.author}&nbsp;
        <button class="removeBtn">Remove</button></p>
      `;
      const removeBtn = div.querySelector('.removeBtn');
      removeBtn.addEventListener('click', () => {
        this.removeBook(book);
        div.remove();
      });
      div.classList.add('div1');
      if (i % 2 === 0) {
        div.style.backgroundColor = '#e4e2e2';
      } else {
        div.style.backgroundColor = 'white';
      }
      div.dataset.index = index;
      i += 1;
      this.displayedBooks.appendChild(div);
    });
  }

  addBook(title, author) {
    const newBook = new Book(title, author);
    this.books.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  removeBook(book) {
    this.books = this.books.filter((b) => b !== book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }
}