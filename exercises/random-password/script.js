var alphabet = "abcdefghijklmnopqrstuvwxyz123456789012345678901234567890!@#$%^&*!@#$%^&*!@#$%^&*";
var upperLowerNumSymbol = alphabet.concat(alphabet.slice(0, 26).toUpperCase());

function randomPassword(int) {
    var password = "";
    for (var i = 0; i < int; i++) {
        password += upperLowerNumSymbol[Math.floor(Math.random() * upperLowerNumSymbol.length)];
    }
    return password;
}
//console.log(randomPassword(20));












// Given an array of strings, find the longest common prefix each string has.
// i.e. a list of yes, yodel, yeah should output y.

var biggestPre = function(input) {
  for (var i = 0; i < input.length; i++) {
    var currentChar = input[0][i];

    for (var j = 1; j < input[j].length; j++) {
      var currentWord = input[j];

      //console.log(currentWord);

      	for (var k = 0; k < currentWord.length; k++) {

          if (currentChar !== currentWord[k]) {
            if (i === 0) {
              return 0;
            } else {
              return input.slice(0, i);
            }
          }
        }
    }
  }
}
var words = [];
words = ["yes", "yuel", "yearn", "yet"];
console.log(biggestPre(words));
