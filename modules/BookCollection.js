export class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.displayedBooks = document.getElementById('displayedBooks');
    this.addBtn = document.getElementById('addBtn');
    this.currentIndex = 0;

    this.addBtn.addEventListener('click', () => {
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      this.addBook(title, author);
      section2.style.display = 'block';
      section3.style.display = 'none';
      section4.style.display = 'none';
      title.value = '';
      author.value = '';
    });
  
    this.displayBooks();
  }

  import {displayBooks} from './displayBooks.js';
  displayBooks();

  import {addBook} from './addBook.js';
  addBook();

  import {removeBook} from './removeBook.js';
  removeBook();
}