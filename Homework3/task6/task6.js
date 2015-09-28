function pow(x, n) {
	var multiply = x;
	for (var i = 1; i < n; i++) {
		multiply *= x;
	}

	return multiply;
}

pow(3, 2);


// OR :D

Math.pow();