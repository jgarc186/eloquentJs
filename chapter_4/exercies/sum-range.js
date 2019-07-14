function range(start, end, step = 1) {
    let numbers = [];
    for (let i = start; i <= end; i += step) {
        numbers.push(i);
    }
    return numbers;
}

function sum(range) {
	let grandTotal = 0;
	for (number of range) {
		grandTotal += number;
	}
	return grandTotal;
}