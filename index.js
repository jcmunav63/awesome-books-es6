/* eslint-disable max-classes-per-file */
/* eslint-disable no-use-before-define */
// eslint-disable-next-line no-unused-vars
const list = document.getElementById('list');
const addBooks = document.getElementById('addBooks');
const contact = document.getElementById('contact');

const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');
const heading = document.getElementById('heading');

addBooks.addEventListener('click', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  title.value = '';
  author.value = '';
  section2.style.display = 'none';
  section3.style.display = 'block';
  section4.style.display = 'none';
  heading.style.display = 'none';
});

contact.addEventListener('click', (event) => {
  event.preventDefault();
  section2.style.display = 'none';
  section3.style.display = 'none';
  section4.style.display = 'block';
  heading.style.display = 'none';
});

import {BookCollection} from './modules/BookCollection.js';

import {displayBooks} from './modules/displayBooks.js';
displayBooks();

import {addBook} from './modules/addBook.js';
addBook();

import {removeBook} from './modules/removeBook.js';
removeBook();

// eslint-disable-next-line no-unused-vars
const bookCollection = new BookCollection();

import {updateDateTime} from './modules/updateDateTime.js';
setInterval(updateDateTime, 1000);
updateDateTime();