var obj = {
  className: 'open menu'
};

function removeClass(obj, cls) {
	var demo = obj.className.split(" ");
	for (var i = 0; i < demo.length; i++) {
		if (demo[i] === cls) {
			demo.splice(i, 1);
			i--;
		}
	}
	obj.className = demo.join(' ');
}

removeClass(obj, 'menu');
console.log(obj);

