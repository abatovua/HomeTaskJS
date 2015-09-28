function capitalize(str) {
	var prepared = str.split(' ');
	for (var i = 0; i < prepared.length; i++) {
		prepared[i] = prepared[i].charAt(0).toUpperCase() + prepared[i].slice(1);
	}

	return prepared.join(' ');
}

capitalize("the quick brown fox"); // The Quick Brown Fox;
