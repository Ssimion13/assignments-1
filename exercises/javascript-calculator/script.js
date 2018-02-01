function sumTwoNums(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtractTwoNums(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiplyTwoNums(num1, num2) {
    return Number(num1) * Number(num2);
}

function divideTwoNums(num1, num2) {
    if (num2 === 0) {
        return undefined;
    }
    return Number(num1) / Number(num2);
}

var ask = require('readline-sync');

var number1 = ask.question('Enter your first number: ');
var number2 = ask.question('Enter your second number: ');
var operator = ask.question('Enter your desired operator (i.e. + - * /): ');

if (operator === '+') {
    console.log('The result is: ' + sumTwoNums(number1, number2));
}

if (operator === '-') {
    console.log('The result is: ' + subtractTwoNums(number1, number2));
}

if (operator === '*') {
    console.log('The result is: ' + multiplyTwoNums(number1, number2));
}

if (operator === '/') {
    console.log('The result is: ' + divideTwoNums(number1, number2));
}
