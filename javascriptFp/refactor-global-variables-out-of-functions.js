/* This Code has been create by: Randol */
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
//const newBookList = bookList;
function add(arr,bookName) {
  const newBookList = [...arr]
  newBookList.push(bookName);
  return newBookList;
  
  // Change code above this line
}

// Change code below this line
function remove(arr,bookName) {
   const newBookList = [...arr]
  const book_index = newBookList.indexOf(bookName);
  if (book_index >= 0) {

    newBookList.splice(book_index, 1);
    return newBookList;

    // Change code above this line
    }
}
//console.log(bookList)
console.log(add(bookList, "A Brief History of Time"))
console.log(remove(bookList,"On The Electrodynamics of Moving Bodies"))