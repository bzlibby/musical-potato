/**
 * given a list of book codes and quantities, and a list of categories, find the total number of books in each category.
 * the first letter of each code equals the code.
 * e.g. ['ABCDE 20'] means that there are 20 copies of the book whose code is ABCDE, and the book's category is A.
 *
 * kata link: https://www.codewars.com/kata/help-the-bookseller/
 *
 */

// when sending over to CodeWars, change bookList and catList to listOfArt and listOfCat
function stockList(bookList, catList) {
  const catTotals = [];
  const catReport = [];
  for (let x = 0; x < catList.length; x++) {
    catTotals.push([catList[x], 0]);
  }
  for (let i = 0; i < bookList.length; i++) {
    bookList[i] = bookList[i].split(" ");
    bookList[i][1] = Number.parseInt(bookList[i][1], 10);
    let bookCat = bookList[i][0][0];
    let catIndex = catList.indexOf(catList.find(a => a === bookCat));
    if (catTotals[catIndex] !== undefined) {
      catTotals[catIndex][1] = catTotals[catIndex][1] + bookList[i][1];
    }
  }
  for (let y = 0; y < catTotals.length; y++) {
    catReport.push(`(${catTotals[y][0]} : ${catTotals[y][1]})`);
  }
  return catReport.join(" - ");
}

console.log(
  stockList(
    ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B"]
  )
); // "(A : 200) - (B : 1140)"
