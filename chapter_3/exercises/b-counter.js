let bCounter = (value) => countChar(value);

let countChar = (value, against = "B") => {
	let counter = 0, num = value.length;
	for (let i = 0; i <= num; i++) {
		if(value[i] === against) counter ++;
	}
	console.log(counter);
}