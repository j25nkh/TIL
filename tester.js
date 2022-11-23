function timer(i) {
	setTimeout(function() {
		console.log(i);
	}, i * 1000);
}

for (i = 1; i < 6; i++) {
	timer(i);
}

