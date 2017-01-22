var my_canvas = document.getElementById("canvas");
var context = my_canvas.getContext("2d");

// circle
// .arc(x, y, radius, startAngle, endAngle)
context.beginPath();
context.arc(100,50,35,0,2*Math.PI);
context.stroke();

// rectangle
// context.strokeRect(x point of upper left corner, y point of upper left corner, width, height);
context.beginPath();
context.fillStyle = "purple";
context.fillRect(70, 140, 60, 20);
context.stroke();

// text
context.fillStyle = "black";
context.font = "15px Times New Roman";
context.fillText("This Is Kinda Cool", 40, 120);
