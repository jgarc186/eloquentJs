// An example of Json
{
	"squirrel" : false,
	"events" : ["work", "touched tree", "pizza", "running"]
}

let string = JSON.stringify({
	squirrel: false,
	events: [
		"Weekends"
	]
});

console.log(string);

console.log(JSON.parse(string).events);