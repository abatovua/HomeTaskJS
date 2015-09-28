function Clock() {
	this.currentDate = new Date();
	this.lastHours = this.currentDate.getHours();
	this.lastMinutes = this.currentDate.getMinutes();
	this.lastSeconds = this.currentDate.getSeconds();

	this.setHours = function(dateObj) {
		return dateObj.getHours();
	}

	this.setMinutes = function(dateObj) {
		return dateObj.getMinutes();
	}

	this.setSeconds = function(dateObj) {
		return dateObj.getSeconds();
	}
}

function checkValue(i) {
	return i < 10 ? '0' + i : i;
}

function getRandomColor() {
	return 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';
}

function timeRun() {
	var now = new Date,
	currentHours = clock.setHours(now),
	currentMinutes = clock.setMinutes(now),
	currentSeconds = clock.setSeconds(now);
		
	if(currentHours === clock.lastHours) {
		hours.innerHTML = checkValue(currentHours);
	} else {
		hours.innerHTML = checkValue(currentHours);
		hours.style.backgroundColor = getRandomColor();
		clock.lastHours = currentHours;
	}

	if(currentMinutes === clock.lastMinutes) {
		minutes.innerHTML = checkValue(currentMinutes);
	} else {
		minutes.innerHTML = checkValue(currentMinutes);
		minutes.style.backgroundColor = getRandomColor();
		clock.lastMinutes = currentMinutes;
	}

	if(currentSeconds === clock.lastSeconds) {
		seconds.innerHTML = checkValue(currentSeconds);
	} else {
		seconds.innerHTML = checkValue(currentSeconds);
		seconds.style.backgroundColor = getRandomColor();
		clock.lastSeconds = currentSeconds;
	}

	setTimeout('timeRun()', 500);

}

var hours = document.getElementById('hours'),
minutes = document.getElementById('minutes'),
seconds = document.getElementById('seconds');
hours.style.backgroundColor = getRandomColor();
minutes.style.backgroundColor = getRandomColor();
seconds.style.backgroundColor = getRandomColor();
var clock = new Clock();
timeRun();
