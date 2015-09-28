function toAlphabeticalOrder(str) {
	return str.split(' ').join('').split('').sort().join('');
}

toAlphabeticalOrder("webmaster"); // abeemrstw

