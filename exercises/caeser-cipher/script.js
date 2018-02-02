var ask = require('readline-sync');
var input = ask.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(ask.question('How many letters would you like to shift? '));

while (isNaN(shift)) {
    shift = parseInt(ask.question('How many letters would you like to shift? '));
}

var alpha = "abcdefghijklmnopqrstuvwxyz";

var shiftedInput = "";

for (var i = 0; i < input.length; i++) {
    var charIndex = alpha.indexOf(input[i]);
    var shiftedIndex = (charIndex + shift) % 26;

    if (charIndex === -1) {
        shiftedInput += input[i];
    } else {
        shiftedInput += alpha.charAt(shiftedIndex);
    }
}
console.log(shiftedInput);
