function unique(arr) {
	var output = [];

	findUnique:
	for (var i = 0; i < arr.length; i++) {
		var isUnique = arr[i];
			for (var j = 0; j < output.length; j++) {
				if (isUnique === output[j]) {
					continue findUnique;
				}
			}
		output.push(arr[i]);
	}
	console.log(output);
}



var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

console.log( unique(strings));