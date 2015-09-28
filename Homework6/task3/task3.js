var arr = [1, 2, 3, 4, 5];

function randomSort(a, b) {
	var random = 0.5 - Math.random();
	return random;
}

arr.sort(randomSort);
console.log(arr);

