var ask = require('readline-sync');

var addNewEntry = function(object) {
    words.push(object);
}

function addEntry(word, definition) {
    word = word.toLowerCase();
    var isDefined = dictionary[word];
    if(!isDefined) {
        dictionary[word] = definition;
    }
    return word + ": " + dictionary[word];
}

var userDone = false;
var dictionary = {};
var choices = ["Continue", "Look Up Word", "Exit Program"];

while (!userDone) {
    var newWord = ask.question("What word do you want to add to the dicionary? ");
    var newDefinition = ask.question("What is the definition of " + newWord + "? ");
    console.log(addEntry(newWord, newDefinition));

    var userDecision = ask.keyInSelect(choices, "What do you want to do? ");

    if (userDecision === 1) {
        var wordToFind = ask.question("Enter the word to look up: ");
        console.log(dictionary[wordToFind]);
    }
}
