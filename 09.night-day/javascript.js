$(document).ready(function() {
	$("#orb").click(function() {
		if ($(this).hasClass("sun")) {
			$(this).removeClass("sun").addClass("moon");
		} else {
			$(this).removeClass("moon").addClass("sun");
		}
	});
	$("#sky").click(function() {
		if ($(this).hasClass("day")) {
			$(this).removeClass("day").addClass("night");
			$("#header").html("<h1>Good Night!</h1>");
		} else {
			$(this).removeClass("night").addClass("day");
			$("#header").html("<h1>Good Morning!</h1>");
		}
	});
});