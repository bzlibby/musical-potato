/**
 * Kata: https://www.codewars.com/kata/duck-duck-goose/train/javascript
 *
 * Duck Duck Grey Duck
 * given an array of objects (players) and the position of the goose (goose), return the value of this.name
 * goose may be > players.length; in that case, loop through the array of players again
 * for example:
 * players = [['p1', 'sam'],['p2', 'carrie'],['p3', 'julie'],['p4', 'brutus']]
 * goose = 5
 * duckDuckGoose = 'sam'
 */

const sittingDucks = [
  ["p1", "sam"],
  ["p2", "carrie"],
  ["p3", "julie"],
  ["p4", "brutus"]
];

function duckDuckGoose(players, goose) {
  // if goose is > players.length, make it <=
  while (goose > players.length) {
    goose = goose - players.length;
  }
  console.log(`is ${goose} equal to or less than ${players.length}? good.`);
  // find the player[i] = goose-1
  const greyDuck = players.find(duck => duck[goose - 1]);
  console.log(greyDuck);
  return greyDuck[1];
}

console.log(duckDuckGoose(sittingDucks, 5));
// should log 'sam'
