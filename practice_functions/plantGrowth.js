function growingPlant(upSpeed, downSpeed, desiredHeight) {
	let days = 0;
	let currentHeight = 0;
	while (currentHeight < desiredHeight) {
		days = days + 1;
		currentHeight = currentHeight + upSpeed;
		if (currentHeight >= desiredHeight) {
			break;
		}
		currentHeight = currentHeight - downSpeed;
	}
	return days;
}

console.log(growingPlant(100, 10, 910));
