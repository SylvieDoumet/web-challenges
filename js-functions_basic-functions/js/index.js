console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data */

const title = "Harry Potter and the Sorcerers Stone";
const author = "Joanne K. Rowling";
let rating = 7.5;
let sales = 9000000;

console.log(title);
console.log(author);
console.log(rating);
console.log(sales);

/*
Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/
sales = sales + 1000000;
rating = rating + 1.0;

console.log(sales, rating);

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

function logBookData(title, author, rating, sales) {
  const title = "Harry Potter and the Sorcerers Stone";
  const author = "Joanne K. Rowling";
  let rating = 7.5;
  let sales = 9000000;
}

console.log(title, author, rating, sales);

LogBookData();

sales = sales + 1000000;
rating = rating + 1.0;

LogBookData();

sales = sales + 500000;
rating = rating + 0.5;

LogBookData();
