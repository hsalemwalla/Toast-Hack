// Global variables
var originalPattern = [[]];
var playerPattern = [[]];
var playerPatternUnmodified = [[]];
var level;
var score;
var gridLength;
var numOfMoves;

const LEVEL_SCORE_MODIFIER = 5432;
const MOVEMENT_SCORE_MODIFIER = 1;

function newGame() {
	initEventHandlers();
	beginLevel(1);	// Begin level 1
}

function beginLevel(nextLevel) {
	if(nextLevel != undefined) {
		// Next level to play is passed in
		level = nextLevel;
		console.log("reset");
	} else {
		// Reset level
		playerPattern = playerPatternUnmodified;
		// Reset score
		score -= 5*MOVEMENT_SCORE_MODIFIER*numOfMoves;
		numOfMoves = 0;
		updateAll();
	}

	// set gridLength
	gridLength = level + 3;	// Level: 1 --> gridLength: 4
	
	// Create two arrays and init them to 0
	originalPattern = initArray(gridLength);
	playerPattern = initArray(gridLength);	// MAY NOT NEED TO DO

	// Reset number of player moves
	numOfMoves = 0;

	// Set score to 0
	score = 0;

	generatePattern();
	scramblePattern();

	// TODO: Update screen with new level data
	updateAll() 
}

function initEventHandlers() {
	$(document).keydown(onKeyPress);
	// $('#canvas').on('keypress', onKeyPress);
	$('#resetButton').click(beginLevel);
}

function initArray(length) {
	var array = new Array(length);
	for(var i = 0; i < gridLength; i++) {
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
				// Increase the number of moves and add score
				numOfMoves++;
				scoreCalculator();		
				return false;
			}
		}
	}
	// All values are identical
	// Level is over
	levelCompleted();
}

function generatePattern(){
	if(gridLength % 2 === 0) {
		for (var i = 0; i < gridLength; i++) {	//this will handle the first diagonal
			for(var j = 0; j < gridLength; j++){
				if (i === j) {
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
		var center = Math.ceil(gridLength/2);
		for (var i = 0; i < gridLength; i++) {
			for(var j = 0; j < gridLength; j++){
				if (i === center || j === center) {
					originalPattern[i][j] = 1;
				} else {
					originalPattern[i][j] = 0;
				}
			}
		}
	}
	playerPattern = originalPattern;
}

function scramblePattern() {
	// The number of scrambles we apply to a pattern is constant
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
	// Store the initial player array state
	playerPatternUnmodified = playerPattern;
}

function onKeyPress(event){
	console.log("a button has been pressed!");
	console.log(score);

	switch(event.which){
		case 38: 
			upShift();
			break;
		case 39: 
			rightShift();
			break;
		case 40: 
			downShift();
			break;
		case 37:
			leftShift();
			break;
		default:
			break;
	}

	updateCanvas();
	isPatternCorrect();
	updateScore();
}

// Callbacks for button presses
function upShift() {
	var tempVal;
	for ( var i=0; i<gridLength; i++){
		tempRow = playerPattern[i][0];

		for ( var j=0; j<gridLength; j++ ){
			//last case
			if(j === (gridLength -1)){
				playerPattern[i][gridLength-1] = tempRow;
			} else {
				playerPattern[i][j] = playerPattern[i][j+1];
			}			
		}
	}
}

function downShift() {
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

function leftShift() {
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

function rightShift() {
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

function scoreCalculator() {
	score += 5*MOVEMENT_SCORE_MODIFIER;
}	


function levelCompleted() {
	// Show level complete screen

	// Add a bonus to the user score
	score += LEVEL_SCORE_MODIFIER * getLevel();
	// Begin the next level
	beginLevel(level+1);
}


function updateAll() {
	updateCanvas();
	updateOriginalImage();
	updateScore();
	updateLevel();
}

function updateCanvas() {
	clearBoard();
	drawBoard(playerPattern);
}

function updateOriginalImage() {

}

function updateScore(){
	$('#score').text("Score: " + getScore());
}


function updateLevel() {
	$('#level').text("Level #" + getLevel());
}


function getOriginalArray() {
	return originalPattern;
}

function getPlayerArray() {
	return playerPattern;
}

function getScore() {
	return score;
}

function getLevel() {
	return level;
}
