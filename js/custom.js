//Create array of words
var words = ['closing tag', 'footer', 'html', 'inline', 
			'link', 'opening tag', 'class', 'href', 'id', 'body', 'div', 'head', 'hyperlinks', 'line breaks',
			'unordered list', 'ordered list', 'paragraphs', 'padding', 'margin', 'font-family', 'selectors', 
			'class', 'array', 'booleans', 'console', 'functions', 'hoisting', 'statement', 'confirm', 'prompt',
			'strings', 'touppercase', 'tolowercase', ]

// Choose word Randomly
var randNum = Math.floor(Math.random() * words.length);
var chosenWord = words[randNum];
// String of letters tried
var lettersTried = "";

var winHappened = false;
var gameEnded = false;
var triesRemaining = 7;



console.log(chosenWord);

// Switches win condition and displays the word. Returns string with partially covered word.
function displayWord() {
	var result = "";
	var win = true;
	for (var i = 0; i < chosenWord.length; i++) {
		if (lettersTried.indexOf(chosenWord[i]) !== -1) {
			result += chosenWord[i];
		} else {
			result += "_";
			win = false;
		}
	}
	winHappened = win;
	return result;
}

	document.querySelector('#underscores').innerHTML=displayWord()

	//added this comment

//Users Guess
document.addEventListener('keypress', (event) => {

	if (gameEnded) {
		return;
	}

	if (lettersTried.indexOf(event.key) !== -1) {
		// console.log(event.key, " already tried");
		return;
	}

	lettersTried += event.key ;
	document.querySelector("#lettersTried").innerHTML = lettersTried;

	if (chosenWord.indexOf(event.key) === -1) {
		triesRemaining--;
		document.querySelector('#triesRemaining').innerHTML=triesRemaining;
		if (triesRemaining === 0) {
			gameEnded = true;
			alert("You Lose!");
		}
	}

	document.querySelector('#underscores').innerHTML=displayWord()
	if (winHappened) {
		gameEnded = true;
		alert("You win!");
	} else {
			console.log("Tries Remaining: ", triesRemaining);
	}








// 	var keyWord = String.fromCharCode(event.keyCode);

// // // If Users guess is right
// 	if(choosenWord.indexOf(keyWord) > -1) {
// 		// add to right words array
// 		rightWord.push(keyWord);

// 		underScore[choosenWord.indexOf(keyWord)] = keyWord;

// 		if(underScore.join('') == choosenWord) {
// 			alert('You Win');
// 		}

// 		console.log(rightWord);
// 	}
		
// 		//replace underscore with right letter
// 		// underScore[choosenWord.indexOf(keyWord)] = keyWord;
		
// 	else wrongWord.push(keyWord);
// 		// console.log(wrongWord);
	

// 	// console.log(generateunderScore());
	
// // 		console.log(rightWord);
// // }
// // 		else wrongWord.push(keyWord);
// // 		console.log(wrongWord);

	
});
