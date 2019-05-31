function square(x) {
	return x * x;
}

console.log("The future says:", future());

function future() {
	return "You will never have flying cars.";
}
// <- The future says: You will never have flying cars.
// This works because functions in JS are not top-to-bottom flow of control.