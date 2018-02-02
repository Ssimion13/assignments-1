var ask = require('readline-sync');

var hasKey = false;
var gameOver = false;
var initialize = ask.question('Welcome to the game, <<ESCAPE ROOM>>\n\nYou are stuck in a room. See if you can get out. Press \'ENTER\'\n\n');

while (gameOver === false) {

    var selection = ask.question('Select option 1, 2, or 3:\n\n1. Put hand in hole\n2. Find the key\n3. Open the door');
    if (selection === "1") {
        console.log('Ouch. Your hand was cut off. You die a slow, painful death.');
        gameOver = true;
    }
    if (selection === '2') {
        console.log('Sweet! You found the key.');
        hasKey = true;
    }
    if (selection === '3') {
        if (hasKey) {
            console.log('You have escaped the room! Good job!');
            gameOver = true;
        }
        console.log('You can\'t open the door. You don\'t have a key.');
    }
}
