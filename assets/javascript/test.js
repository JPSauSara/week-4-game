// References and things we tested ---------------------------------------------------

 // $(document).ready(function() {

// var pbjCounter = 0;

//       $(".bluegem").on("click", function() {
//         alert("Mmm... Peanut Butter Jelly Time.");
//         pbjCounter++;
//         alert("You've eaten " + pbjCounter + " PB&J sandwiches");
//       });
// });

// var someObj = {
//       name: "Red Hat",
//       say: function() {
//         console.log(this.name);
//       }
//     };
//     someObj.say();



// sort-of worked --------------------------------------------------------------------

	//Generate random number shown at start of game (should be between 19 - 120)
		//this worked if you had a var Array for $gameOptions 
			// $gameChallenge = $gameOptions[Math.floor((Math.random())*$gameOptions.length)];
			// $(".challenge").html($gameChallenge);



// did NOT Work ----------------------------------------------------------------------

	// The below did NOT work. It gave me the same value for all gems
		// $blueGem = $rndCrystalVal[Math.floor((Math.random())*$rndCrystalVal.length)];
		// console.log($blueGem);
		// $greenGem = $rndCrystalVal[Math.floor((Math.random())*$rndCrystalVal.length)];
		// console.log($blueGem);
		// $whiteGem = $rndCrystalVal[Math.floor((Math.random())*$rndCrystalVal.length)];
		// console.log($blueGem);
		// $purpleGem = $rndCrystalVal[Math.floor((Math.random())*$rndCrystalVal.length)];
		// console.log($blueGem);