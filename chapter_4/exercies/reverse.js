function reverseArray(values) {
	let revese = [];
	for (value of values) {
		revese.unshift(value);
	}
	return revese;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}