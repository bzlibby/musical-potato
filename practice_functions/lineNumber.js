const number = function(array) {
  const lineNumbers = [];
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      lineNumbers.push(i + 1 + ": " + array[i]);
    }
  }
  return lineNumbers;
};

console.log(number(["a", "b", "c"]));
