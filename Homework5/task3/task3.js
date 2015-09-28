function askForNumbers() {
  	var numbersList = [];
  
	for(var i = 0;;i++) {
    	var number = prompt('Type a number');
  	
  		if(number === '' || isNaN(number) === true || number === null) {
  		break;
  		} else {
  		numbersList.push(parseInt(number));
   		}
  	}
  	return numbersList;
}

function sum(arr) {
	var summary = 0;
	for (var j = 0; j < arr.length; j++) {
		summary += arr[j];
	}
	return summary;
}

var numbers = askForNumbers();
console.log(numbers);
sum(numbers);




