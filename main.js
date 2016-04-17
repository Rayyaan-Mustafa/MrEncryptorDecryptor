/* document.onkeypress = function (e) {
    if (e.keyCode == 13) {
        alert("You will be woken up every " + textArea.value + " minute(s) in the event that you fall asleep!")
    }
}
*/

/*document.onkeypress = function(e) {
  if (e.keyCode == 13) {
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var theLetter;
    var beingReplaced = textBeingReplaced.value;
    var uglyReplacer = textReplacer.value;
    document.write("original text: " + hello)
    document.write("<br>")
    document.write("new text: ")

    for (var i = 0; i < letters.length; i++) {
      theLetter = letters[i];
      if (theLetter == beingReplaced) {
        theLetter = uglyReplacer;
        document.write(theLetter);
      } else {
        document.write(theLetter);
      }
    }
  }
}
*/

document.onkeypress = function (e) {
	if (e.keyCode == 13) {
		var letters =    " 1234567890ABCDEF[];',./GHIJKLM~!@#$%^&*()_+NOPQRS=-TUVW{}|:XYZ"; //DONT FORGET THE SPACE INSIDE
		var newLetters = "ZYX:|}{WVUT-=SRQPON+_)(*&^%$#@!~MLKJIHG/.,';][FEDCBA0987654321 "; //DONT FORGET ABOUT THE SPACE INSIDE
		var placeholdingText = textArea.value;
		var capitalInput = placeholdingText.toUpperCase();
		var output = "";
		var space = " ";
		var star = "*";
		var finalOutput;

		for (var i=0; i<capitalInput.length; i++) {
			var inputLetter = capitalInput[i];

			for (var j = 0; j<letters.length; j++ ) {
				var checkingLetter = letters[j];
				if (inputLetter == checkingLetter ) {
					output = newLetters[j];
					finalOutput = finalOutput + output;
					//document.write(output);
				}
				//else if (finalOutput == undefined) {finalOutput = " ";}
			}
		}
	document.getElementById("outputText").innerHTML = finalOutput;//displays the output into the output box	
	}
}

















