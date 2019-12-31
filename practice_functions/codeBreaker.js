/**
 * the second and the last letter is switched (e.g. Hello becomes Holle)
 * the first letter is replaced by its character code (e.g. H becomes 72)
 */
function decipherThis(str) {
  const words = str.split(" ");
  const deciphered = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const decipheredWord = [];
    // split word into numbers and letters
    const wordHead = word.match(/[0-9]/g).join("");
    const wordTail = word.match(/[a-z]/gi);
    // change the UTF code to the letter it represents
    decipheredWord.push(String.fromCharCode(wordHead));
    if (wordTail != null && wordTail.length > 1) {
      // swap the second and last letters
      const secondLetter = wordTail[0];
      const lastLetter = wordTail[wordTail.length - 1];
      wordTail[0] = lastLetter;
      wordTail[wordTail.length - 1] = secondLetter;
      decipheredWord.push(wordTail.join(""));
    } else if (wordTail != null && wordTail.length === 1) {
      decipheredWord.push(wordTail);
    }
    deciphered.push(decipheredWord.join(""));
  }
  return deciphered.join(" ");
}

console.log(decipherThis("72olle 103doo 100ya")); // 'Hello good day'
console.log(decipherThis("82yade 115te 103o")); // 'Ready set go'
console.log(
  decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")
); // 'Have a go at this and see how you do'
