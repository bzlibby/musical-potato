/**
 * https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript
 */
function songDecoder(song) {
  console.log(song);
  song = song.split("WUB").filter(word => word !== "");
  return song.join(" ");
}

console.log(songDecoder("AWUBBWUBC"));
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
