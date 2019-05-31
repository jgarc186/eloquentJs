let num = 0;
while (num <= 12) {
	console.log(num);
	num += 2;
}

let result = 1;
let number = 0;

while (number < 10) {
	result *= 2;
	number += 1;
}

console.log(result);

do {
	yourName = prompt("Who are you?");
} while (! yourName) {
	console.log(yourName);
}

if (false != true) {
	console.log("That makes sense.");
	if (1 < 2) {
		console.log("No surprise there.");
	}
}

for (var i = 0; i <= 10; i += 2) {
	console.log(i);
}

let result = 1;
for (var i = 0; i < 10; i++) {
	result *= 2;
}
console.log(result);

// Returns 21
for (var i = 20; ; i++) {
	if (i % 7 == 0) {
		console.log(i);
		break;
	}
}