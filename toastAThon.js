// Global variables
originalPattern[][]
playerPattern[][]
level
score
numOfMoves
gridLength


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

}

function scoreCalculator() {

}

function updateScore()
function updateGraphics()
