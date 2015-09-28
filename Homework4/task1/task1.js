function fib(n) {
	var fib1 = 1;
	var fib2 = 1;
	for (var i = 3; i <= n; i++) {
		var fibn = fib1 + fib2;
		fib1 = fib2;
		fib2 = fibn;
	}
	return fib2;
}
