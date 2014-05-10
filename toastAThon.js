// Global variables
originalPattern[][]
playerPattern[][]
var level;
var score;
var numOfMoves;
var gridLength;
const var LEVEL_SCORE_MODIFIER = 5432;
const var MOVEMENT_SCORE_MODIFIER = 1;


// Methods
init()
isPatternCorrect()	// Increment numOfMoves
scramblePattern()
eventListener()

// Callbacks for button presses
function leftShift(){
	var tempVal;
	for ( var i=0; i<gridLength; i++){
		tempRow = playerPattern[i][0];

		for ( var j=0; j<gridLength; j++ ){
			//last case
			if(j === (gridLength -1){
				playerPattern[i][gridLength-1] = tempRow;
			} else {
				playerPattern[i][j] = playerPattern[i][j+1];
			}			
		}
	}
}

function rightShift(){
	var tempVal;
	for ( var i=0; i<gridLength; i++){
		tempRow = playerPattern[i][gridLength -1];

		for ( var j=gridLength-1; j>=0; j--){
			//last case
			if(j === 0){
				playerPattern[i][0] = tempRow;
			} else {
				playerPattern[i][j] = playerPattern[i][j-1];
			}			
		}
	}
}

function upShift(){
	var tempVal;
	for ( var i=0; i<gridLength; i++){
		tempRow = playerPattern[0][i];

		for ( var j = 0; j < gridLength-1; j++){
			//last case
			if(j === 0){
				playerPattern[gridLength-1][i] = tempRow;
			} else {
				playerPattern[j][i] = playerPattern[j-1][i];
			}			
		}
	}
}

function downShift(){
	var tempVal;
	for ( var i=0; i<gridLength; i++){
		tempRow = playerPattern[gridLength-1][i];

		for ( var j=gridLength-1; j>=0; j--){
			//last case
			if(j === 0){
				playerPattern[0][i] = tempRow;
			} else {
				playerPattern[j][i] = playerPattern[j-1][i];
			}			
		}
	}
}

function generatePattern(){
	if(gridLength % 2 === 0) {
		for (var i = 0; i < gridLength; i--) {	//this will handle the first diagonal
			for(var j = 0; j < gridLength; j++){
				if (i === j || ) {
					originalPattern[i][j] = 1;
				} else {
					originalPattern[i][j] = 0;
				}
			}
		}
		for(var k = 0; k < gridLength; k++){
			originalPattern[k][gridLength - 1 - k] = 1;
		}
	} else {
		var center = ceil(gridLength/2);
		for (var i = 0; i < gridLength; i--) {
			for(var j = 0; j < gridLength; j++){
				if (i === center || j === center) {
					originalPattern[i][j] = 1;
				} else {
					originalPattern[i][j] = 0;
				}
			}
		}
}

function scoreCalculator() {
	score += 5*MOVEMENT_SCORE_MODIFIER;
}	


function updateScore()
function updateGraphics()
