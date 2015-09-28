function suffle(arr) {
	return arr.sort(function(a, b) {
		return Math.random() - 0.5;
	});
}
