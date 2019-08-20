let board = "", size = 8;

for (var x = 0; x <= 8; x++) {
	for (var y = 0; y <= 0; y++) {
		if ((x + y) % 2) board += "#";
		else board += " ";
	}
	board += "\n";
}

console.log(board);