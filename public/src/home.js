function getTotalBooksCount(books) {
//return the total number of books and return 0 if the array is empty
  return countItems(books);  
}

function getTotalAccountsCount(accounts) {
//return the total number of accounts and return 0 if the array is empty
  return countItems(accounts);  
}

function getBooksBorrowedCount(books) {
//return the total number of borrowed books
  return books.reduce((total, {borrows}) => {
    const current = borrows[0];
    if(!current.returned){
      total++;}
    return total;
  }, 0);  
}
  
function getMostCommonGenres(books) {
//return list of top five genres from most common to least
  let topFive = [];
  let common = books.map((book) => book.genre);
    //map over topFive and check if each genre repeats in the array
    common.map((genre)=>{
    const count = topFive.findIndex((match) => match.name === genre);
      if(count >= 0){
        //increase count if it exists
        topFive[count].count = topFive[count].count +1;
      }else{
        //else push into new array
        topFive.push({ name: genre, count: 1 });
      }
  });
  
  //sort top five from most common to least
  topFive.sort((genreA,genreB) => genreB.count - genreA.count);
    if(topFive.length > 5){
      return topFive.slice(0,5);
    }
  return topFive;
}

function getMostPopularBooks(books) {
//return list of top five borrowed books
  let topFive = books.map((book) =>{
    return { name: book.title, count: book.borrows.length};
  });
    return topFive.sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1)).slice(0, 5); 
}

function getMostPopularAuthors(books, authors) {
//return a list of top five authors
  let topFive = [];
    for(let author of authors){
      let name = `${author.name.first} ${author.name.last}`;
        
      let count = 0;
      for(let book of books){
         if(author.id === book.authorId){
           count += book.borrows.length;
        }
      }
      const result = { name: name, count: count};
      topFive.push(result);
    }
  return topFive.sort((authorA, authorB) => (authorA.count < authorB.count ? 1 : -1)).slice(0, 5); 
 }

//created helper function
function countItems(item) {
  return item.length;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
  countItems,
};
