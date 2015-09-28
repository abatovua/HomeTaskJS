function returnTypeof(arg) {
	return typeof arg;
}

returnTypeof({}); // "object"
returnTypeof(null); // "object"
returnTypeof(true); // "boolean"
returnTypeof(undefined); // "undefined"
returnTypeof("Foo"); // "string"
returnTypeof(2); // "number"
returnTypeof(Math.max); // "function"
returnTypeof(function(a ,b) { return a + b;}); // "function"
