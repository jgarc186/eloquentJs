function numberToString(n, base = 10) {
	let result = "", sign = "";
	if (n < 0) {
		sign = "-";
		n = -n;
	}
	do {
		result = String(n % base) + result;
		n /= base;
	} while (n > 0);
	return sign + result;
}
console.log(numberToString(13, 10));
// → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e-3181.3…

/** 
  * We know that our program is malfunctioning, and we want to find out why. 
  *
  * This is where you must resist the urge to start making random changes to the code to see whether that makes it better. 
  * Instead, think. 
  * Analyze what is happening and come up with a theory of why it might be happening. 
  * Then, make additional observations to test this theory—or, if you don’t yet have a theory, make additional observations to help you come up with one.
  *
  * Putting a few strategic console.log calls into the program is a good way to get additional information about what the program is doing. 
  **/

/**
  * An alternative to using console.log to peek into the program’s behavior is to use the debugger capabilities of your browser. 
  * Browsers come with the ability to set a breakpoint on a specific line of your code. 
  * When the execution of the program reaches a line with a breakpoint, it is paused, and you can inspect the values of bindings at that point. 
  * I won’t go into details, as debuggers differ from browser to browser, but look in your browser’s developer tools or search the Web for more information.
 **/