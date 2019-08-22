let ages = {
    Boris: 39,
    Liang: 22,
    Julia: 62
};

console.log("Julia is " + ages["Julia"]);
console.log("Is Jake's age know?", "jack" in ages);
console.log("Is toString's age know?", "toString" in ages);

let age = new Map();

age.set("Jualia", 62);
age.get("Jualia");


console.log({x: 1}.hasOwnProperty("x"));
console.log({x: 1}.hasOwnProperty("toString"));