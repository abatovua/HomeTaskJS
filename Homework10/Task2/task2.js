//Если в лоб :)

function getMaxNumber(arr) {
	arr.sort(function(a,b) {return a - b;});
	return arr[arr.length - 1];
}

getMaxNumber([1,30,40,2,7]); // 40
getMaxNumber([1,15,-20,2,-7]); // 15

// Не в лоб

function getMaxNumber(arr) {
	return Math.max.apply(null, arr);
}

getMaxNumber([1,30,40,2,7]); // 40
getMaxNumber([1,15,-20,2,-7]); // 15