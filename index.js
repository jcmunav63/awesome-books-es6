import BookCollection2 from './modules/BookCollection2.js';
// import { DateTime } from './node_modules/luxon.js'
/* global luxon */
const luxonDateTime = luxon.DateTime;

const addBooks = document.getElementById('addBooks');
const contact = document.getElementById('contact');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');
const heading = document.getElementById('heading');

addBooks.addEventListener('click', (event) => {
  event.preventDefault();
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

const bookCollection1 = new BookCollection2();
bookCollection1.displayBooks();

const updateDateTime = () => {
  const currentDateTime = luxonDateTime.now();
  const formatDateTime = currentDateTime.toLocaleString(luxonDateTime.DATETIME_MED_WITH_SECONDS);
  const currentDateTime2 = `${formatDateTime}`;
  const datetimeElement = document.getElementById('datetime');
  datetimeElement.textContent = currentDateTime2.toLocaleString();
};

setInterval(updateDateTime, 1000);
updateDateTime();