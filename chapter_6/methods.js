let rabbit = {};

rabbit.speak = function(line) {
	console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm a live.");
// -> The rabbit says 'I'm alive.'

function speak(line) {
	console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {
	type: "white",
	speak
};

let hungryRabbit = {
	type: "hungry",
	speak
}

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting.");
// --> `The white rabbit says 'Oh my ears and whiskers, how late it's getting.'
hungryRabbit.speak("I could use a carrot right now.");
// --> `The hungry rabbit says 'I could use a carrot right now.'`

speak.call(whiteRabbit, "Burp!");
// --> The white rabbit says 'Burp!'