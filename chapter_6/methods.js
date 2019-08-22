let rabit = {};
rabit.speak = function(line) {
  console.log("The rabbit says " + line);
};

rabit.speak("Hello World!");

function speak (line) {
    console.log(`The ${this.type} rabbit says ${line}`);
}

let whiteRabbit = {
    type: "white",
    speak
};
let hungryRabbit = {
    type: "Hungry",
    speak
};

whiteRabbit.speak("Nice to meet you!");
hungryRabbit.speak("I'm starving");

speak.call(hungryRabbit, "I am burp!");

function normalize() {
    console.log(this.coords.map(n => n / this.length));
}
normalize.call({
    coords: [
        0,
        2,
        3
    ],
    length: 5
});