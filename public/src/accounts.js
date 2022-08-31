function findAccountById(accounts, id) {
//find and return account with matching id
    return accounts.find((account) => account.id === id);
    }
    
function sortAccountsByLastName(accounts) {
//sort accounts alphabetically by last name
    return accounts.sort((accountA, accountB) => accountB.name.last < accountA.name.last ? 1 : -1)
    }
    
function getTotalNumberOfBorrows(account, books) {
//return number of books borrowed by account id
  const acctId = account.id;
  //loop through borrows array to see if the account being tested matches the account id
  return books.reduce((total, {borrows}) => {
    //if there is a match, total is incremented
    if (borrows.some((record) => record.id === acctId)) 
      total++;
        //return the total amount of books that have been borrowed
        return total;
  }, 0);
}
    
function getBooksPossessedByAccount(account, books, authors) {
//return all of the books taken out by an account with the author embedded
    let borrowed = [];
    books.forEach((book) => {
      if (book.borrows.find((item) => item.id === account.id && !item.returned)){
         borrowed.push(book);
      }})
      
    borrowed.forEach((book) => {
    let eachAuthor = authors.find((person) => person.id === book.authorId);
      book['author'] = eachAuthor;
    })
      return borrowed;
} 

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
