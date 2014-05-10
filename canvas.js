var colourMap = {
	0 : '#FF5454', 
	1 : '#FFAA3B', 
	2 : '#D1FF54', 
	3 : '#52A8FF',
	4 : '#CF4DFF',
	5 : '#EDEDED'
};

var blockArray = [[1,0,3],[4,2,3],[0,5,5]];
var numSquaresPerRow = blockArray.length;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var boxDim = canvas.width / numSquaresPerRow;

function drawBoard(){
for (var x = 0; x < canvas.width; x += boxDim) {
	for (var y = 0; y < canvas.height; y += boxDim) {
		context.fillStyle = colourMap[blockArray[x/boxDim][y/boxDim]];
		context.fillRect(x, y, boxDim, boxDim);
	}
}
}

function drawGrid(){
for (var x = 0; x <= canvas.width; x += boxDim) {
    context.moveTo(x + 0.5, 0);
    context.lineTo(x + 0.5, canvas.height);
}


for (var y = 0; y <= canvas.width; y += boxDim) {
    context.moveTo(0, y + 0.5);
    context.lineTo(canvas.width, y + 0.5);
}

context.lineWidth = 3;
context.strokeStyle = "#A4DEEB";
context.stroke();
}

drawBoard();
drawGrid();