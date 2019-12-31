const testList = [1, 2, "aasf", "1", "123", 123];

function filterList(l) {
  const integersOnly = [];
  // Return a new array with any non-positive integers removed filtered out
  for (let i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i]) === true) {
      integersOnly.push(l[i]);
    }
  }
  return integersOnly;
}

console.log(filterList(testList));
// should return [1,2,123]
