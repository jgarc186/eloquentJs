/**
  * There is another feature that try statements have. 
  * They may be followed by a finally block either instead of or in addition to a catch block. 
  * A finally block says “no matter what happens, run this code after trying to run the code in the try block.”
  **/
  function transfer(from, amount) {
  	if (accounts[from] < amount) {
  		return;
  	}

  	let progress = 0;

  	try {
  		accounts[from] -= amount;
  		progress = 1;
  		accounts[getAccount()] += amount;
  		progress = 2;
  	} finally {
  		if (progress == 1) {
  			accounts[from] += amount;
  		}
  	}
  }