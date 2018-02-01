var ask = require('readline-sync');
console.log('Hello! My name is Ryan. Help me get to know you!\n');
var firstName = ask.question('What is your first name? ');
var lastName = ask.question('Okay, ' + firstName + ', and what is your last name? ');

console.log('Cool. Nice to meet you, ' + firstName);

var age = ask.question('I\'m 45 years old. How old are you? ');

console.log('Sweet. So, now I know your name is ' + firstName + ' ' + lastName + '. ' + 'And you\'re ' + age + ' years old.');

var background = ask.question('Tell me about your background, and I\'ll repeat back what I remember: ');

console.log('That was lot of information - ' + background.length + ' characters long! Here\'s the last half: ' + background.slice(background.length / 2, background.length));

var userSelection = ask.question('Would you like to start from somewhere else in your info? Choose a number in the range of [0 to ' + (background.length - 1) + ']: ');

console.log('Here ya go: ' + background.slice(userSelection, background.length));

console.log('Now here\'s your info two times: ' + background + background);
