let array = [
	[
		1, 2, 3
	],
	[
		4, 5
	],
	[
		6
	]
];

let reduce = (values = []) => {
	let total = values.length - 1, newValue = [];
	for (let numbers of values) {
		for (let i = 0; i <= total; i++) {
			if (typeof(numbers[i]) != "undefined") newValue.push(numbers[i]);
		}
	}
	return newValue;
};

reduce(array);