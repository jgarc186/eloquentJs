/**
  * Computers are good at repetitive tasks, and testing is the ideal repetitive task. 
  * Automated testing is the process of writing a program that tests another program. 
  * Writing tests is a bit more work than testing manually, but once you’ve done it, you gain a kind of superpower: 
  * it takes you only a few seconds to verify that your program still behaves properly in all the situations you wrote tests for. 
  * When you break something, you’ll immediately notice, rather than randomly running into it at some later time.
  **/

function test(label, body) {
	if (! body() console.log(`Failed: ${label}`));
}
test("Convert Latin Test To uppercase", ()=> {
	return 'hello'.toUpperCase() == 'HELLO';
}); // -> true

/** 
  * Some code is easier to test than other code. 
  * Generally, the more external objects that the code interacts with, the harder it is to set up the context in which to test it. 
  * The style of programming shown in the previous chapter, which uses self-contained persistent values rather than changing objects, tends to be easy to test. 
  **/
  