let chessBoard = (size = 8) => {
	let board = "";
	for (let x = 0; x <= 8; x++) {
		for (let y = 0; y <= size; y++) {
			if ((x + y) % 2) board += "#";
			else board += " ";
		}
		board += "\n";
	}
	console.log(board);
}