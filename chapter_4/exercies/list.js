function arrayToList([one, two]) {
	let list = {
		value: one,
		rest: {
			value: two,
			rest: null
		}
	};
	return list;
}

function listToArray(value) {
	let arrayOfValues = [];
	for (let node = value; node; node = value.rest) {
		arrayOfValues.push(node.value);

		if (node.rest == null) break;
	}
	return arrayOfValues;
}

