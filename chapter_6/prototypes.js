let empty = {};
console.log(empty.toString());
console.log(empty.toString);

console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} says the following ${line}`);
    }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "Killer";
killerRabbit.speak("SKREEE!");