function filterByTheMostPopular(arr) {
	var matches = {};
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if(!matches[arr[i]]) {
			matches[arr[i]] = 1;
		}
		else {
			matches[arr[i]]++;
		}
	}

	for (var key in matches) {
		result.push([key, matches[key]]);
	}

	result.sort(function(a, b) {
		return b[1] - a[1];
	});

	for (var j = 0; j < result.length; j++) {
		result[j] = result[j][0];
	}

	return result;
}

var demo = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];
filterByTheMostPopular(demo); // ['link', 'menu__item', 'menu', 'header', 'footer', 'sidebar'];
