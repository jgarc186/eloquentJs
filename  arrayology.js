let todoList = [];

function remember(task) {
	todoList.push(task);
}

function getTask() {
	return todoList.shift(); // <-- to remove a task at the begining of an array.
}

function rememberUrgently(task) {
	todoList.unshift(task); // <-- To add a task at the begining of an array
}

function remove(array, index) {
	return array.slice(0, index).concat(array.slice(index + 1));
}

let numbers = [
	1,
	5,
	10
];

console.log(max(...numbers));
// -> 10

let words = [
	"Never",
	"Fully"
];

console.log([
	"Will"
	...words,
	"Understand"
]);
//  ["Will", "never", "fully", "Understand"]