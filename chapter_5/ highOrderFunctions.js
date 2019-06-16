function greaterThan(n) {
	return n => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// --> true

function noisy(f) {
	return (...args) => {
		console.log("calling with", args);
		let result = f(...args);
		console.log("Called with", args, ", returned", result);
		return result;
	};
}
noisy(Math.max)(3, 2, 1);
// --> calling with [3, 2, 1]
// --> called with [3, 2, 1], returned 3

function unless(test, then) {
	if (! test) then();
}

repeat(3, n => {
	unless(n % 2 == 1, () => {
		console.log(n, "is even");
	});
});
// --> 0 is even
// --> 2 is even

["A", "B"].forEach(l => console.log(l));
// --> A
// --> B