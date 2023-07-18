import { DateTime } from "./modules/luxon-min.js";
import { BookCollection2 } from './modules/BookCollection2.js';

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
  // eslint-disable-next-line no-unused-vars
  const title = document.getElementById('title').value;
  // eslint-disable-next-line no-unused-vars
  const author = document.getElementById('author').value;
  // title.value = '';
  // author.value = '';
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

// eslint-disable-next-line no-unused-vars
const bookCollection1 = new BookCollection2();
// eslint-disable-next-line no-unused-vars
let length = bookCollection1.length;

// let DateTime = luxon.DateTime;
function updateDateTime() {
  const currentDateTime = DateTime.now();
  // const currentDateTime = DateTime.now().toString();
  // const year = currentDateTime.year;
  // const month = currentDateTime.month;
  // const day = currentDateTime.day;
  // const hour = currentDateTime.hour;
  // const minute = currentDateTime.minute;
  // const second = currentDateTime.second;
  const formattedDateTime = currentDateTime.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  const currentDateTime2 = `${formattedDateTime}`;

  const datetimeElement = document.getElementById('datetime');
  datetimeElement.textContent = currentDateTime2.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();