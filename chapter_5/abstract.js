for (var i = 0; i < 10; i++) {
	console.log(i);
}

function repeatLog(n) {
	for (var i = 0; i < n; i++) {
		console.log(i);
	}
}

function repeat(n, action) {
	for (var i = 0; i < n; i++) {
		action(i);
	}
}

repeat(3, console.log);
// -> 0
// -> 1
// -> 2

let label = [];
repeat(5, i => {
	label.push(`Unit ${i + 1}`);
});
console.log(labels);
// -> ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]