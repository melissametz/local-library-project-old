function findAuthorById(authors, id) {
//return author object when given a particular id
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
//return book object when given a particular id
  return books.find((book)=> book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
//use filter, some, and every method to return an array with two arrays: borrowed books and returned books
  let borrowed = books.filter((book) =>
    book.borrows.some((borrow) => borrow.returned === false));
  let returned = books.filter((book) =>
    book.borrows.every((borrow) => borrow.returned === true));
  return [[...borrowed], [...returned]];
}

function getBorrowersForBook(book, accounts) {
//return an array of ten or fewer account objects and return status
  let borrowers = []
  book.borrows.map((borrow) =>{
    let account = accounts.find((account) => account.id === borrow.id);
    let status = account;
      status['returned'] = borrow.returned;
      borrowers.push(status);
    });
  return borrowers.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
