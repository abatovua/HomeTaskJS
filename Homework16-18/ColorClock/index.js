function clock() {
	var now = new Date();
	var hours = document.getElementById('hours');
	var minutes = document.getElementById('minutes');
	var seconds = document.getElementById('seconds');
	var colors = ['red', 'green', 'blue', 'orange', 'gray'];
	
	if(now.getHours() < 10) {
		hours.innerHTML = '0' + now.getHours();
	} else {
		hours.innerHTML = now.getHours();
	}

	if(now.getMinutes() < 10) {
		minutes.innerHTML = '0' + now.getMinutes();
	} else {
		minutes.innerHTML = now.getMinutes();
	}

	if(now.getSeconds() < 10) {
		seconds.innerHTML = '0' + now.getSeconds();
		seconds.style.backgroundColor = colors[Math.floor(Math.random() * 5)];
	} else {
		seconds.innerHTML = now.getSeconds();
		seconds.style.backgroundColor = colors[Math.floor(Math.random() * 5)];
	}
	
	setTimeout('clock()', 1000);
}

document.addEventListener("DOMContentLoaded", clock);
