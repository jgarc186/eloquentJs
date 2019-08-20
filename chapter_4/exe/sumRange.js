let range = (...number, step = 1) => {
	let numberRange = [];

	if (Math.sign(step) == 1) {
		for (let i = start; i <= end; i += step) {
			numberRange.push(i);
		}		
	} else {
		for (let i = end; i <= start; i -= step) {
			numberRange.push(i);
		}	
	}

	return numberRange.reverse();
}

let sum = (total) => {
	let count = total.length, grandTotal = 0;

	for (let i = 0; i <= count; i++) {
		if (typeof total[i] == "number") grandTotal += total[i];
		else break;
	}
	
	console.log(grandTotal);
}