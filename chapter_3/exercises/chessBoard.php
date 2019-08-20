<?php 

$chessBoard = function ($size = 8) {
	$board = "";
	for ($x = 0; $x <= 8; $x++) {
		for ($y = 0; $y <= $size; $y++) {
			if (($x + $y) % 2) {
				$board .= "#";
			} else {
				$board .= " ";
			}
		}
		$board .= "\n";
	}
	print($board);
};
