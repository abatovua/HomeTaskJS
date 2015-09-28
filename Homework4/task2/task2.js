function checkSpam(str) {
	if ( str.toLowerCase().indexOf("sex") >= 0 || str.toLowerCase().indexOf("spam") >= 0 ) {
		return true;
	}

	return false;
}



checkSpam('get new Sex videos'); // true
checkSpam('[SPAM] How to earn fast money?'); //true
checkSpam('New PSD template'); // false