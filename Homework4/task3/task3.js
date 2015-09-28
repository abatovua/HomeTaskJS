function trippleDot(str) {
	if (str.length > 20) {
		return (str.slice(0, 19) + "...");
	}

	return str;
}

