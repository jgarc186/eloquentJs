let age = {
	Boris: 39,
	Ling: 22,
	Julia: 62
};

console.log(`Julia is ${age['Julia']}`);
// --> Julia is 62

console.log(`Ling is ${age['Ling']}`);
// --> Ling is 22

console.log("Is Jack's age know?", "Jack" in age);
// --> Is Jack's age know? false