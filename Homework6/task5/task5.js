function isPal(str) {
	var preparedArr = str.toLowerCase().split(' ').join('').split('');
	return preparedArr.join('') === preparedArr.reverse().join('') ? true : false;
}
