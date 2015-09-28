function Calculator() {

	var operations = {
		"+": function(a, b){
			return a + b;
		},

		"-": function(a, b) {
			return a - b;
		}
	};


	this.calculate = function(str) {

		var prepared = str.split(" "),
		a = +prepared[0],
		sign = prepared[1],
		b = +prepared[2]

		if ( !operations[sign] || isNaN(a) || isNaN(b) ) {
			return NaN;
		}

	return operations[sign](a, b);

	}

	this.addMethod = function(name, func) {
		operations[name] = func;
	}
}

var calc = new Calculator;

calc.addMethod("*", function(a, b) {
  return a * b;
});
calc.addMethod("/", function(a, b) {
  return a / b;
});
calc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = calc.calculate("2 ** 3");
alert( result );