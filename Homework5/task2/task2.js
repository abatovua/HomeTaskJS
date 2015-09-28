function multiplyNumeric(obj) {
	
	for( value in obj) {
		if (typeof obj[value] === "number") {
			obj[value] = obj[value] * 2;
		}
	}

	console.log(obj);
}


var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

multiplyNumeric(image);