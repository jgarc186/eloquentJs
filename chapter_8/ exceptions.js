function promptDirection() {
	let result = prompt(question);
	if (result.toLowerCase() == "left") return "L";
	if (result.toLowerCase() == "right") return "R";
	throw new Error("Invalid direction: " + result);
}

function look() {
	if (promptDirection("Which way?") == "L") {
		return "a house";
	} else {
		return "two angry bears";
	}
}

try {
	console.log("You see " + look());
} catch (error) {
	console.log("Something went wrong: " + error);
}

/**
  * we used the Error constructor to create our exception value. 
  * This is a standard JavaScript constructor that creates an object with a message property. 
  * In most JavaScript environments, instances of this constructor also gather information about the call stack that existed when the exception was created, a so-called stack trace. 
  * This information is stored in the stack property and can be helpful when trying to debug a problem: 
  * it tells us the function where the problem occurred and which functions made the failing call.
  **/