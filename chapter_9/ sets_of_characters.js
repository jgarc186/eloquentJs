console.log(/[0123456789]/.test("in 1992"));
// --> true

console.log(/[0-9]/.test("in 1992"));
// --> true

console.log(/\d/.test("in 1992"));

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2013 15:20"));
// --> true

console.log(dateTime.test("30-jan-2003 15:20"));
// --> false

let notBinary = /[^01]/;

console.log(notBinary.test("1100100010100110"));
// --> true
console.log(notBinary.test("1100100010200110"));
// --> false