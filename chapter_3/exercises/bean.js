
function countBs(name) {
	return countChar(name);
}

function countChar(name, letter = "B") {
	let counter = 0;
	for (let i = 0; i < name.length; i++) {
		if (name[i] == letter) counter++;
	}
	return counter;
}