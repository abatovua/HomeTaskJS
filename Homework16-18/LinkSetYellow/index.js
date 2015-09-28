function setYellow() {
	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		if(links[i].getAttribute('href') && links[i].getAttribute('href').indexOf('http://internal.com') !== 0 && links[i].getAttribute('href').indexOf('://') >= 0) {
			
			links[i].setAttribute('class', 'external');
		}
	}
}

document.addEventListener("DOMContentLoaded", setYellow);
