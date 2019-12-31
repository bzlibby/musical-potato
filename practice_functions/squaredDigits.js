function squareDigits(num) {
	console.log(num);
	//turn it into a string
	const stringDigits = num.toString();
	console.log(stringDigits);
	//split up the string into single digits
	const splitDigits = stringDigits.split("");
	console.log(splitDigits);
	//square the individual digits
	const squaredDigits = splitDigits.map(x => x * x);
	console.log(squaredDigits);
	//combine the digits
	const joinSquares = squaredDigits.join("");
	console.log(joinSquares);
	//convert to number & return
	return parseInt(joinSquares, 10);
}

squareDigits(9119);
