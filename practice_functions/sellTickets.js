/**
 * change for tickets?
 * kata link: https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript
 *
 * peopleInLine = array of strings equaling 25, 50, or 100
 * if each ticket = 25, calculate if each person in line can be sold a ticket without any starting change
 * examples:
 * tickets([25, 25, 50]) // => YES
 * tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
 * tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
 */

const threeInLine = [25, 25, 50];
const twoInLine = [25, 100];
const fiveInLine = [25, 25, 50, 50, 100];

function tickets(peopleInLine) {
	const ticketChange = { "25": 0, "50": 0, "100": 0 };
	let i = 0;
	let condition = true;
	while (i < peopleInLine.length && condition === true) {
		if (peopleInLine[i] === 25) {
			ticketChange[25] = ticketChange[25] + 1;
			i++;
		}
		if (peopleInLine[i] === 50) {
			condition = ticketChange[25] >= 1;
			ticketChange[25] = ticketChange[25] - 1;
			ticketChange[50] = ticketChange[50] + 1;
			i++;
		}
		if (peopleInLine[i] === 100) {
			if (ticketChange[25] >= 1 && ticketChange[50] >= 1) {
				ticketChange[25] = ticketChange[25] - 1;
				ticketChange[50] = ticketChange[50] - 1;
				ticketChange[100] = ticketChange[100] + 1;
				i++;
			} else if (ticketChange[25] >= 3) {
				ticketChange[25] = ticketChange[25] - 3;
				ticketChange[100] = ticketChange[100] + 1;
				i++;
			} else {
				condition = false;
			}
		}
	}
	if (condition === true) {
		return "YES";
	} else if (condition === false) {
		return "NO";
	}
}

console.log(tickets(threeInLine)); /* should reeturn YES */
console.log(tickets(twoInLine)); /* should return NO */
console.log(tickets(fiveInLine)); /* should return NO */
