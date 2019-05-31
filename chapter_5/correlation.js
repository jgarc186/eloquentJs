function phi(table) {
	return (table[3] * table[0] - table[2] * table[1]) /
		Math.sqrt(
				(table[2] + table[3]) *
				(table[0] + table[1]) *
				(table[1] + table[3]) *
				(table[0] + table[2]));
}

console.log(phi([
		76,
		9,
		4,
		1
	]));

function tableFor(event, journal) {
	let table = [0, 0, 0, 0];

	for (var i = 0; i < journal.length; i++) {
		let entry = journal[i];
		let index = 0;

		if (entry.events.includes(event)) {
			index ++;
		} else if (entry.squirrel) {
			index += 2;
		}

		table[index] ++;
	}

	return table;
}

console.log(tableFor("Pizza", JOURNAL));