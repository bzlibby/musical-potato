class Student {
	constructor(name, fives, tens, twenties) {
		this.name = name;
		this.fives = fives;
		this.tens = tens;
		this.twenties = twenties;
	}
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);

function mostMoney(students) {
	for (let i = 0; i < students.length; i++) {
		students[i].total =
			students[i].fives * 5 + students[i].tens * 10 + students[i].twenties * 20;
	}
	const studentsCopy = students.sort((a, b) => b.total - a.total);
	console.log(studentsCopy);
	const n = students.length - 1;
	if (
		studentsCopy.length > 1 &&
		studentsCopy[0].total === studentsCopy[n].total
	) {
		return "all";
	} else {
		return studentsCopy[0].name;
	}
}

console.log(mostMoney([andy, stephen]));
