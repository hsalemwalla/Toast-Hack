var colourMap = {
	0 : '#FF5454', 
	1 : '#FFAA3B', 
	2 : '#D1FF54', 
	3 : '#52A8FF',
	4 : '#CF4DFF',
	5 : '#EDEDED'
};

var gridCanvas = document.getElementById("gridCanvas");
var gridContext = gridCanvas.getContext("2d");

function clearBoard(){
	gridContext.clearRect(0,0, gridCanvas.width, gridCanvas.height);
}

function drawBoard(array){
	var numSquaresPerRow = array.length;
	var boxDim = gridCanvas.width / numSquaresPerRow;

	for (var x = 0; x < gridCanvas.width; x += boxDim) {
		for (var y = 0; y < gridCanvas.height; y += boxDim) {
			gridContext.fillStyle = colourMap[array[x/boxDim][y/boxDim]];
			gridContext.fillRect(x, y, boxDim, boxDim);
		}
	}

	for (var x = 0; x <= gridCanvas.width; x += boxDim) {
	    gridContext.moveTo(x + 0.5, 0);
	    gridContext.lineTo(x + 0.5, gridCanvas.height);
	}


	for (var y = 0; y <= gridCanvas.width; y += boxDim) {
	    gridContext.moveTo(0, y + 0.5);
	    gridContext.lineTo(gridCanvas.width, y + 0.5);
	}
	

	gridContext.lineWidth = 3;
	gridContext.strokeStyle = "#A4DEEB";
	gridContext.stroke();
}