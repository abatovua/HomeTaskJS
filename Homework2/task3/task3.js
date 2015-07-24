var login = prompt("Type your login please");

if (login === "admin") {
	var password = prompt("Your password?");

	if (password === "passw0rd") {
		alert("Welcome home!");
	} else if (password === null) {
		alert("Canceled");
	} else {
		alert("Wrong password!");
	}
} else if (login === null) {
	alert("Canceled");
} else {
	alert("Access denied");
}