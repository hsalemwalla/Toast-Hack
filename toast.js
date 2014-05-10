





/* THIS IS A TEMPORARY FILE - METHODS TO BE COPIED TO FINAL FILE */






// Score and level is consistant throughout app life
var score;
var level;


// Following global variables are updated every level
var originalPattern;
var playerPattern;
var numOfMoves;



function init(nextLevel) {
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
	return true;
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


