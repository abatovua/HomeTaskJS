var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

function sortByAge(arr) {
	function sortMin(a, b) {
		return a.age - b.age;
	}
	arr.sort(sortMin);
	
	for(var i = 0; i < arr.length; i++) {
		console.log( (i+1) + ")" + arr[i].name );
	}

}

sortByAge(people);


