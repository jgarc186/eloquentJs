let day1 = {
	squirrel: false,
	events: [
		"work",
		"touched tree",
		"pizza",
		"running"
	]
};

console.log(day1.squirrel);
// -> false
console.log(day1.wolf);
// -> Undefined
day1.wolf = false;
console.log(day1.worlf);
// ->false

let description = {
	work: "Went to work", 
	"Touched tree": "Touched a tree"
};

let anObject = {
	left: 1,
	right: 2
};

delete anObject.left;
console.log(anObject.left);
// -> Undefined
console.log("left" in anObject);
// -> false
console.log("right" in anObject);
// -> true

console.log(Object.keys({x: 0, y: 0, z: 2}));
// -> ["x", "y", "z"]

let journal = [
	{
		events: [
			"work",
			"touched tree",
			"Pizza",
			"Running",
			"television"
		],
		squirrel: false
	},
	{
		events: [
			"Work",
			"ice cream",
			"cauliflower",
			"lasagna",
			"touched tree",
			"brushed teeth"
		],
		squirrel: false
	},
	{
		events: [
			"weekend",
			"cycling",
			"break",
			"peanuts",
			"beer"
		],
		squirrel: true
	}
];

