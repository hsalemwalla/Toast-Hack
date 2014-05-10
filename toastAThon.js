// Global variables
var originalPattern = [][];
var playerPattern = [][];
var level;
var score;
var gridLength;
var playerPattern;
var numOfMoves;

const var LEVEL_SCORE_MODIFIER = 5432;
const var MOVEMENT_SCORE_MODIFIER = 1;

function newGame() {
	initEventHandlers();
	beginLevel(1);	// Begin level 1
}

function beginLevel(nextLevel) {
	// set level
	level = nextLevel;

	// set gridLength
	gridLength = level + 3;	// Level: 1 --> gridLength: 4
	
	// Create two arrays and init them to 0
	originalPattern = initArray(gridLength);
	playerPattern = initArray(gridLength);	// MAY NOT NEED TO DO

	// Reset number of player moves
	numOfMoves = 0;

	// generatePattern();
	// scramblePattern();
}

function initEventHandlers() {
	// Init the key press event handlers
}

function initArray(length) {
	var array = new Array(length);
	for(int i = 0; i < gridLength; i++) {
		array[i] = new Array(gridLength);
	}
	return array;
}

function isPatternCorrect() {
	// Check if the player array is identical to the original array

	// May need to access the length of one array dimension
	for(var i = 0; i < gridLength; i++) {
		for(var j = 0; j < gridLength; i++) {
			// Iterate through the array, if any value is not equal, return false
			if(originalPattern[i][j] != playerPattern[i][j]) {
				return false;
			}
		}
	}
	// All values are identical
	// Level is over
	levelCompleted();
	return true;
}

function generatePattern() {

}

function scramblePattern() {
	// The number of scrambles we apply to a pattern is consta
	var NUM_OF_SCRAMBLES = 100;

	var nextMove = 0;

	for(var i = 0; i < NUM_OF_SCRAMBLES; i++) {
		// Might need to modify '4'
		nextMove = Math.floor(Math.random() * 4);
		switch(nextMove) {
			case 0: // Up
				upShift();
				break;
			case 1: // Right
				rightShift();
				break;
			case 2: // Down
				downShift();
				break;
			case 3: // Left
				leftShift();
				break;
			default:
				// Used to catch error in random number generation
				upShift();
		}
	}
	return;
}


// Callbacks for button presses
function leftShift() {
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

function rightShift() {
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

function upShift() {
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

function downShift() {
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


function scoreCalculator() {
	
}

function levelCompleted() {
	// Calculate score
	// 
	// begin next level
}

function getOriginalArray() {
	return originalPattern;
}

function getPlayerArray() {
	return playerPattern;
}

function getScore() {
	return score();
}

function getLevel() {
	return level;
}
