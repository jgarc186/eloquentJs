class Rabbit {
    constructor(type) {
        this.type = type;
    }

    speak(line) {
        return `The ${this.type} rabbit says ${line}`;
    }
}

let killerRabbit = new Rabbit("Killer");
killerRabbit.speak("ERKKK!!");

let object = new class {
    getWorld(value) {
        return "Hello " + value;
    }
};

object.getWorld("world!");