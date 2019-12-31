const developer = {
  name: "Briana",
  age: 22,
  height: "5 ft 2 in",
  eyeColor: "blue",
  topStrengths: [
    "restorative",
    "developer",
    "empathy",
    "intellection",
    "learner"
  ]
};

function listTopStrengths(user) {
  console.log(
    `When ${user.name} was ${user.age} years old, their top 5 strenghts were ${
      user.topStrengths[0]
    }, ${user.topStrengths[1]}, ${user.topStrengths[2]}, ${
      user.topStrengths[3]
    }, & ${user.topStrengths[4]}.`
  );
}

listTopStrengths(developer);

function updateStrengths(user) {
  user.topStrengths = [
    "input",
    "learner",
    "empathy",
    "intellection",
    "individulization"
  ];
  user.age = user.age + 4;
} /*keeps the same variable but modifies part of it*/

function listNewStrengths(user) {
  console.log(
    `Now, ${user.name} is ${user.age} years old, and their top strengths are ${
      user.topStrengths[0]
    }, ${user.topStrengths[1]}, ${user.topStrengths[2]}, ${
      user.topStrengths[3]
    }, & ${user.topStrengths[4]}.`
  );
}

updateStrengths(developer);
listNewStrengths(developer);

function User(name, age, height, eyeColor, topStrengths) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.eyeColor = eyeColor;
  this.topStrengths = topStrengths;
  console.log(
    `A new user has entered the console! ${this.name} is ${
      this.height
    } with beautiful, ${this.eyeColor} eyes.`
  );
}

let devOps = new User("Sean", 27, "6 ft 3 in", "blue", [
  "restorative",
  "individualization",
  "analytical",
  "learner",
  "relator"
]);

listTopStrengths(devOps);

let cat = new User("Ham", 4.5, "1 ft", "green", false);

listTopStrengths(cat);
