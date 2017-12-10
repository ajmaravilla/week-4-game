//Game Info: Player clicks on 1 of 4 planes to create a flight number that is equal to the randomly generate flight number.
		      //Planes are worth between 1 - 12	
		      //Randomly generated flight numbers are between 19 - 120
	         //Player loses if their flight is greater than the randomly generated flight

var winCount = 0;
var lossCount = 0;
var userGuessSum = 0;

//Display random flight number
var randomNumber = Math.floor(Math.random()*(120-19+1) + 19);

//Assign each plane a value
var randomFlight = function(){
	return Math.floor(Math.random()*(12) + 1);
};

//set variables for each plane
var b787Gem = randomFlight();
var b748Gem = randomFlight();
var cathay747Gem = randomFlight();
var boeing747Gem = randomFlight();

//Write initial match and totoal counters to HTML
$("#matchFlight-div").html(randomNumber);
$("#totalFlight-div").html(userGuessSum);

//writing win and loss counters to HTML call function
function printToHTML(){
  var htmlDiv = "WINS: " + winCount + "    LOSSES: " + lossCount + "<br>";
  $("#instruct-counter-div").html(htmlDiv);      
};
//iniitializing win, loss counters to html
printToHTML();

//Reset
var resetGame = function(){
  userGuessSum = 0;
  randomNumber = Math.floor(Math.random()*(120-19+1) + 19);
  $("#matchFlight-div").text(randomNumber);
  $("#totalFlight-div").html(userGuessSum);
  //all icons are assigned new numbers
  b787Gem = randomFlight();
  b748Gem = randomFlight();
  cathay747Gem = randomFlight();
  boeing747Gem = randomFlight();
};

//function to send the plane value through conditionals
function checkValueUnder(gemValue){

  userGuessSum += gemValue;
  //send the plane values through conditionals
  if (userGuessSum < randomNumber){
    $("#totalFlight-div").text(userGuessSum);      
  } else if (userGuessSum === randomNumber){
    winCount += 1;
    $("#totalFlight-div").text(userGuessSum);
    printToHTML();
    resetGame();
  } else {
    lossCount +=1;
    $("#totalFlight-div").text(userGuessSum);
    printToHTML();
    resetGame();    
  };
}


$("#b787").click(function(){
  glass.play();
	checkValueUnder(b787Gem);
});

$("#b748").click(function(){
  glass.play();
	checkValueUnder(b748Gem);
});

$("#cathay747").click(function(){
  glass.play();
	checkValueUnder(cathay747Gem);
});

$("#boeing747").click(function(){
  glass.play();
	checkValueUnder(boeing747Gem);
});
