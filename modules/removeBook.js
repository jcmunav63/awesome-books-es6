export removeBook() { //book

  this.books = this.books.filter((b) => b !== this.book);
  localStorage.setItem('books', JSON.stringify(this.books));
}