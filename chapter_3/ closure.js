function wrapValue(n) {
	let local = n;
	return ()=> local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1());
// -> 1
console.log(wrap2());
// -> 2

/**
  * A function that references bindings from local scopes
  *	around it is called a closure. This behavior not only 
  * frees you from having to worry sbout lifetimes of bindings
  */

function multiplier(factor) {
	return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
// -> 10
