var player = {
    name: "",
    attackMin: 5,
    attackMax: 10,
    health: 10,
    items: []
};

var enemies = [
    enemyOne = {
        name: "Fanged Rabbit",
        attackMin: 1,
        attackMax: 3,
        health: 4,
        item: "black pearl"
    },
    enemyTwo = {
        name: "Snollygoster",
        attackMin: 3,
        attackMax: 5,
        health: 6,
        item: "red jewel"
    },
    enemyThree = {
        name: "Bloody Bones",
        attackMin: 4,
        attackMax: 7,
        health: 8,
        item: "magic staff"
    }
]

var ask = require('readline-sync');

var name = ask.question('Welcome to the awesome game: << Colossal Adventure >>\n\n Enter your name: ');

player.name = name;

while (player.health > 0) {

    var walking = ask.question('Okay, ' + player.name + ', enter a \'w\' to begin walking: ');

    while (walking !== 'w') {
        walking = ask.question('Enter a \'w\' to begin walking: ');
    }

    var attackRandom = Math.floor(Math.random() * 4);

    if (attackRandom === 3) {
        console.log('It was a peaceful walk. No enemies in sight.');
    } else {
        var selectionGood = false;
        var fightOrFlight = ask.question('A ' + enemies[attackRandom].name + ' has appeared! Press \'a\' to attack, or \'r\' to run: ');
        while (selectionGood === false) {
            if (fightOrFlight !== 'a') {
                if (fightOrFlight !== 'r') {
                    fightOrFlight = ask.question('Press \'a\' to attack, or \'r\' to run: ');
                }
            }
        }
        if (fightOrFlight === 'r') {
            var survived = Math.random() + 1;
            console.log(survived);
        }
    }
}
