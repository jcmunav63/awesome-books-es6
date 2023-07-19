/* global removeBook */
export default const removeBook = () => {
  this.books = this.books.filter((b) => b !== this.book);
  localStorage.setItem('books', JSON.stringify(this.books));
}