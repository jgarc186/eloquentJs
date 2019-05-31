const power = (base, exponent) => { // <-- This works as a function using the `=>` syntax
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
};

// These two produce the same result, one syntax is shorter than the other.
const square1 = (x) => {return x * x; };
const square2 = x => x * x;

const horn = () => {
	console.log("Toot");
};