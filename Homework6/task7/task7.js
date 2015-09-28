function anClean(arr) {
	var unique = {};
	for (var i = 0; i < arr.length; i++) {
		var prepared = arr[i].toLowerCase().split('').sort().join('');
		unique[prepared] = arr[i];
	}
	var output = [];
	for (key in unique) {
		output.push(unique[key]);
	}

	return output;
}


var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

console.log(anClean(arr));
