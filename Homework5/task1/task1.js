function theBestEmployee(obj) {
	var max = 0;
	var theBest;

	for (person in obj) {
		if (obj[person] > max) {
			max = obj[person];
			theBest = person;
		}
	}

	return theBest + " is our best employee with " + max + " completed tasks!";
}

var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99,
  'Hanna' : 100500
};

theBestEmployee(tasksCompleted);