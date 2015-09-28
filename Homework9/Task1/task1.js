function sumArgs() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) {
  	args.push(arguments[i]);
  }
  return args.reduce(function(a, b) { return a + b;});
}

sumArgs(1, 2, 3, 4, 5, 6, 7);