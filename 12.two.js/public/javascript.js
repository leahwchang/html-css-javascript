$(document).ready(function() {
	var elem = document.getElementById("doodle");
	var two = new Two({fullscreen: true}).appendTo(elem);

	// // makeCircle two.makeCircle(x, y, radius);
	// var dot = two.makeCircle(150,150,100);
	// dot.fill = "#FFFFE7";
	// dot.noStroke();

	// // makeRectangle two.makeRectangle(x, y, width, height);
	// var rect = two.makeRectangle(220, 220, 150, 90);
	// rect.fill = "#D1FEFF";
	// rect.stroke = "#BBCFFF";
	// rect.linewidth = 3;

	// // makeLine two.makeLine(x1, y1, x2, y2);
	// var line = two.makeLine(180, 180, 350, 90);
	// line.stroke = "#BFFFD9";
	// line.linewidth = 5;

	var position = new Two.Vector(two.width/2, two.height/2);
	
	var head = two.makeCircle(position.x, position.y, 150);
	head.fill = "#FFE2E1";
	head.stroke = "#FEC6C4";
	head.linewidth = 3;

	// makePolygon two.makePolygon(ox, oy, r, sides);
	var leftear = two.makePolygon(position.x-112, position.y-80, 50, 3);
	leftear.fill = "#FFE2E1";
	leftear.stroke = "#FEC6C4";
	leftear.linewidth = 3;

	var rightear = two.makePolygon(position.x+112, position.y-80, 50, 3);
	rightear.fill = "#FFE2E1";
	rightear.stroke = "#FEC6C4";
	rightear.linewidth = 3;
	// rightear.rotation = -Math.PI / 15;

	// eyes, pupils, iris
	var lefteye = two.makeCircle(position.x-57, position.y-12, 25);
	lefteye.fill = "#FFFAFD";
	lefteye.noStroke();

	var righteye = two.makeCircle(position.x+57, position.y-12, 25);
	righteye.fill = "#FFFAFD";
	righteye.noStroke();

	var leftpupil = two.makeCircle(position.x-57, position.y-6, 15);
	leftpupil.fill = "#332E74";
	leftpupil.stroke = "#5C51DC";
	leftpupil.linewidth = 5;

	var rightpupil = two.makeCircle(position.x+57, position.y-6, 15);
	rightpupil.fill = "#332E74";
	rightpupil.stroke = "#5C51DC";
	rightpupil.linewidth = 5;

	var leftiris = two.makeCircle(position.x-62, position.y-10, 5);
	leftiris.fill = "#BAB8FF";
	leftiris.noStroke();

	var rightiris = two.makeCircle(position.x+52, position.y-10, 5);
	rightiris.fill = "#BAB8FF";
	rightiris.noStroke();

	// snout
	// makeEllipse two.makeEllipse(x, y, width, height);
	var snout =  two.makeEllipse(position.x, position.y+40, 30, 20);
	snout.fill = "#FFE2E1";
	snout.stroke = "#FEC6C4";
	snout.linewidth = 3;

	var leftnostril = two.makeCircle(position.x-7, position.y+40, 5);
	leftnostril.fill = "#FEC6C4";
	leftnostril.noStroke();

	var rightnostril = two.makeCircle(position.x+7, position.y+40, 5);
	rightnostril.fill = "#FEC6C4";
	rightnostril.noStroke();

	// mouth, tongue
	var mouth = two.makeCurve(0,0,  40,0,  40,0,  35,25,  20,35,  5,25,  0,0);
	mouth.fill = "#EE3E36";
	mouth.translation.x = position.x;
	mouth.translation.y = position.y+90;
	mouth.noStroke();

	var tongue = two.makeCurve(20,15,  30,10,  35,25,  20,30,  5,25,  10,10,  20,15);
	tongue.fill = "#F0ABA5";
	tongue.translation.x = position.x;
	tongue.translation.y = position.y+90;
	tongue.noStroke();

	two.update();
});