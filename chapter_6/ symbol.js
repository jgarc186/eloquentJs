let sym = Symbol("name");

console.log(sym == Symbol("name"));
//  --> false

Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// --> 55