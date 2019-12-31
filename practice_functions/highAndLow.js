/**
 * given a string of space separated numbers, return the highest and lowest number
 * kata link: https://www.codewars.com/kata/highest-and-lowest/train/javascript
 */

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Number.parseInt(numbers[i], 10);
  }
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow("1 2 3 4 5")); /* returns "5 1" */
console.log(highAndLow("1 2 -3 4 5")); /* returns "5 -3" */
console.log(highAndLow("1 9 3 4 -5")); /* returns "9 -5" */
