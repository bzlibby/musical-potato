function countDigis(n, d) {
  const digis = n.toString(10).split("");
  const dibsDigis = digis.filter(a => a === d.toString(10));
  return dibsDigis.length;
}

function nbDig(n, d) {
  const squaresArray = [];
  for (let i = 0; i <= n; i += 1) {
    squaresArray.push(i ** 2);
  }
  const hasD = squaresArray
    .map(x => countDigis(x, d))
    .reduce((x, y) => x + y, 0);
  console.log(n, d, hasD);
  return hasD;
}

console.log(nbDig(10, 1));
