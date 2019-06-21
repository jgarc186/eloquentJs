function prompNumber(question) {
	let result = Number(prompt(question));

	if (Number.isNan(result)) {
		return null;
	} else {
		return result;
	}
}

console.log(prompNumber("How many tress did you see?"));

/**
  * The second issue with returning special values is that it can lead to awkward code. 
  * If a piece of code calls promptNumber 10 times, it has to check 10 times whether null was returned. 
  * And if its response to finding null is to simply return null itself, callers of the function will in turn have to check for it, and so on.
  **/