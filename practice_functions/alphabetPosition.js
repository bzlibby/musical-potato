/**
 * Alphabet Position
 * given any given string (text), return a new string (textPosition) with the alphabetical position (alphabet[i]) of each letter in the original string
 * ignore any non-alphabetical characters
 */
const alphabet = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z"
];
function alphabetPosition(text) {
	/* make the string lowercase */
	const littleText = text.toLowerCase("");
	console.log(littleText);
	const onlyLetters = littleText.match(/[a-z]/g);
	console.log(onlyLetters);
	/* filter the array for alphabetical characters only */
	/* for each character in the filtered array, replace the letter with it's matching index in (alphabet) */
	const textPosition = [];
	if (onlyLetters === null) {
		text = "";
	} else {
		for (let i = 0; i < onlyLetters.length; i++) {
			textPosition.push(alphabet.indexOf(onlyLetters[i]) + 1);
		}
		text = textPosition.join(" ");
	}
	return text;
}

console.log(
	alphabetPosition(
		"I close my eyes and all the world drops dead / (I think I made you up inside my head)"
	)
);
