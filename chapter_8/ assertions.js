/**
  * Assertions are checks inside a program that verify that something is the way it is supposed to be. 
  * They are used not to handle situations that can come up in normal operation but to find programmer mistakes.
  **/
  function firstElement(array) {
  	if (array.length == 0) {
  		throw new Error("firstElement called with []");
  	}
  	return array[0];
  }
  