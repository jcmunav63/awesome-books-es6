import { removeBook(book) } from './removeBook.js';

export function displayBooks() {
  
  this.displayedBooks.innerHTML = '';
  let i = 0;

  this.books.forEach((book, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <p>"${book.title}"&nbsp;by&nbsp;${book.author}&nbsp;<button class="removeBtn">Remove</button><p>
      <hr>
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