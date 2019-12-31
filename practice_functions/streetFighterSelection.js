const fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

function streetFighterSelection(position, moves) {
  let y = position[0];
  let x = position[1];
  let cursorPath = [];
  for (let i = 0; i < moves.length; ++i) {
    if (moves[i] === "up") {
      if (y > 0) {
        y = y - 1;
      }
    } else if (moves[i] === "down") {
      if (y < fighters.length - 1) {
        y = y + 1;
      }
    } else if (moves[i] === "left") {
      if (x === 0) {
        x = fighters[y].length - 1;
      } else {
        x = x - 1;
      }
    } else if (moves[i] === "right") {
      if (x === fighters[y].length - 1) {
        x = 0;
      } else {
        x = x + 1;
      }
    }
    cursorPath.push(fighters[y][x]);
  }
  return cursorPath;
}

console.log(
  streetFighterSelection([0, 0], ["up", "left", "right", "left", "left"])
); // should return ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
console.log(streetFighterSelection([0, 0], [])); // should return []
console.log(
  streetFighterSelection(
    [0, 0],
    ["left", "left", "left", "left", "left", "left", "left", "left"]
  )
); // should return ['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog']
