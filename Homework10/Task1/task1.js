var obj = {
  person1Age: 20,
  person1Name: 'Ivanov',
  person2Age: 30,
  person2Name: 'Petrov',
  person3Age: 40,
  person3Name: 'Sidorov'
};

obj.extractNumber = function() {
	var numbers = [];
	for (var key in this) {
		if(typeof this[key] === "number") {
			numbers.push(this[key]);
		}
		else {
			continue;
		}
	}
	return numbers;
}

obj.extractString = function() {
	var strings = [];
	for (var key in this) {
		if(typeof this[key] === "string") {
			strings.push(this[key]);
		}
		else {
			continue;
		}
	}
	return strings;
}

obj.extractNumber();
obj.extractString();
