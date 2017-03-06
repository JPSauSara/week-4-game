// The player will be shown a random number at the start of the game.
//Generate a random number for challenge

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
//  * Your game will hide this amount until the player clicks a crystal.
//  * When they do click one, update the player's score counter.
// * The player wins if their total score matches the random number from the beginning of the game.
// * The player loses if their score goes above the random number.

// * The game restarts whenever the player wins or loses.
//     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.

$(document).ready(function() {

// // GLOBAL VARIABLES
// //-----------------------------------------------------------------------
// //Arrays and Variables for holding data
var $gameOptions = Math.floor((Math.random()*120)+19);
// var $gameChallenge = "";
var $userCount = 0;
var $blueGem = Math.floor((Math.random()*12)+1);
var $greenGem = Math.floor((Math.random()*12)+1);
var $whiteGem = Math.floor((Math.random()*12)+1);
var $purpleGem = Math.floor((Math.random()*12)+1);
// var $rndCrystalVal = [1, 2, 3, 4, 5]


// //Game Counters
var $winCount = 0;
var $lossCount = 0;

// //-----------------------------------------------------------------------
function gameStart () {
	//Generate random number shown at start of game (should be between 19 - 120)
	$(".challenge").html($gameOptions);

	//reset
	$userCount = 0;

	//give crystals a random value
	$(".bluegem").on("click", function () {
		weArePlaying($blueGem);
	});
	$(".greengem").on("click", function () {
		weArePlaying($greenGem);
	});
	$(".whitegem").on("click", function () {
		weArePlaying($whiteGem);
	});
	$(".purplegem").on("click", function () {
		weArePlaying($purpleGem);
	});

	};

	// test and debugging
	console.log($blueGem);
	console.log($greenGem);
	console.log($whiteGem);
	console.log($purpleGem);	

//if $currentCount == $gameChallenge, you win. But if it is > $gameChallenge you lose. 
	// gameStart ();

	function weArePlaying (gem) {
		$userCount += gem;
		$(".userscore").empty();
		$(".userscore").append($userCount);
		if ($userCount == $gameOptions) {
			alert ("Hurray! You won!");
			$winCount++;
			gameStart();
		} else if ($userCount > $gameOptions) {
			alert ("Well shoot. Try again");
			$lossCount++;
			gameStart();
		}
	};

// MAIN PROCESS
//-----------------------------------------------------------------------
gameStart ();
}); //this is closing line 18 document.ready
