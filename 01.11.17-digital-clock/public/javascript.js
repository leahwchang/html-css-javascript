$(document).ready(function() {

	function setClock() {
		var clock = new Date();
		var hours = clock.getHours();
		var minutes = clock.getMinutes();
		var seconds = clock.getSeconds();



		if (minutes < 10) {
			minutes = "0" + minutes;
		}

		if (seconds < 10) {
			seconds = "0" + seconds;
		}

		var meridiem = "AM";
		if (hours > 12) {
			hours = hours - 12;
			meridiem = "PM";
		}

		if (hours === 0) {
			hours = 12;
		}

		var currentTime = document.getElementById("current_time");
		
		currentTime.innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridiem;

		setInterval(setClock, 1000);
	}

	setClock();

});

