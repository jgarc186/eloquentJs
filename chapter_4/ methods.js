let doh = "Doh";

console.log(typeof doh.toUpperCase); 
// -> function type
console.log(doh.toUpperCase()); // <- method to set letters to upper case
// ->DOH

let sequence = [
		1,
		2,
		3
	];

sequence.push(4);
sequence.push(5);
console.log(sequence);
// -> [1, 2, 3, 4, 5]
console.log(sequence.pop());
// -> 5
console.log(sequence);
// -> [1, 2, 3, 4]

