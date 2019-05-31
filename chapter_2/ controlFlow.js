// This is a line control flow:
let theNumber = Number(prompt("Pick a number"));
console.log("You number is the square root of " + theNumber * theNumber);

// This is conditional execution
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
	console.log("Your number is the square root of " + theNumber * theNumber);
}

// Returns true
if (1 + 1 == 2) console.log(true);

// Using the if and else to decide which statement to return.
let theNumber = Number(prompt("Pick a Number"));
if (!Number.isNan(theNumber)) {
	console.log("Your number is the square root of " + theNumber * theNumber);
} else {
	console.log("Hey why didn't you pick a number?");
}

let num = Number(prompt("Pick a number"));
if (num < 10) {
	console.log("Small");
} else if(num < 100) {
	console.log('Medium');
} else {
	console.log("Large");
}