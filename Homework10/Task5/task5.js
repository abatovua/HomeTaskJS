function theLongestWord(str) {
	var prepared = str.split(' ');
	var theLongest = prepared[0];
	
	for (var i = 1; i < prepared.length; i++) {
		if(prepared[i].length > theLongest.length)
			theLongest = prepared[i];
	}
	return theLongest;
}

theLongestWord('Web Development Tutorial'); // Development;

