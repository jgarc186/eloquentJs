//  "... if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it." ~ Brian Kernighan and P.J. Plauger, The Elements of Programming Style

/** 
  * If a program is crystallized thought, you can roughly categorize bugs into those caused by the thoughts being confused 
  *	and those caused by mistakes introduced while converting a thought to code. The former type is generally harder to diagnose 
  *	and fix than the latter. 
  **/

function canYouSportTheProblem() {
	"use strict";
	for (let counter = 0; counter < 10; counter ++) {
		console.log("Happy happy");
	}
}

canYouSportTheProblem(); // --> ReferenceError: counter is not defined

function Person(name) { this.name = name; }

let ferdinand = Person("Ferdinand"); // Forgot new
// --> Ferdinand

'use strict';
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand"); // Forgot new
// → TypeError: Cannot set property 'name' of undefined

/**
  * Strict mode does a few more things. It disallows giving a function multiple parameters with the same name 
  * and removes certain problematic language features entirely (such as the with statement, 
  * which is so wrong it is not further discussed in this book).
  *
  * In short, putting "use strict" at the top of your program rarely hurts and might help you spot a problem.
  **/