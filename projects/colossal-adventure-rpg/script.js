var player = {
    name: "",
    attackMin: 5,
    attackMax: 10,
    health: 50,
    items: []
};

var enemies = [
    enemyOne = {
        name: "Fanged Rabbit",
        attackMin: 1,
        attackMax: 3,
        health: 12,
        item: "black pearl"
    },
    enemyTwo = {
        name: "Snollygoster",
        attackMin: 3,
        attackMax: 5,
        health: 20,
        item: "red jewel"
    },
    enemyThree = {
        name: "Bloody Bones",
        attackMin: 4,
        attackMax: 7,
        health: 30,
        item: "magic staff"
    }
]

var ask = require('readline-sync');

var gameOver = false;
var choices = ["Keep Playing", "Display Your Info", "End the Game"];

var name = ask.question('Welcome to the awesome game: << Colossal Adventure >>\n\n Enter your name: ');

player.name = name;

while (!gameOver) {

    var walking = ask.question('\nOkay, ' + player.name + ', enter a \'w\' to begin walking: ');

    while (walking !== 'w') {
        walking = ask.question('\nEnter a \'w\' to begin walking: ');
    }

    var attackRandom = Math.floor(Math.random() * 4);

    if (attackRandom === 3) {
        console.log('\nIt was a peaceful walk. No enemies in sight.');
    } else {
        var selectionGood = false;
        var fightOrFlight = ask.question('\nA ' + enemies[attackRandom].name + ' has appeared! Press \'a\' to attack, or \'r\' to run: ');
        while (selectionGood) {
            if (fightOrFlight !== 'a') {
                if (fightOrFlight !== 'r') {
                    selectionGood = true;
                    fightOrFlight = ask.question('Press \'a\' to attack, or \'r\' to run: ');
                }
            }
        }

        if (fightOrFlight === 'r') {
            var survived = Math.random() + 1;

            if (survived < 1.5) {
                console.log('\nYou tried to run away, but the ' + enemies[attackRandom].name + ' caught you and ate you. You\'re dead.\n\nThanks for playing!');
                gameOver = true;
            } else {
                console.log('\nYou got away! But the ' + enemies[attackRandom].name + ' attacks from behind and you lose ' + (Math.floor(Math.random() * (enemies[attackRandom].attackMax) + enemies[attackRandom].attackMin)) + ' health points.');
            }
        } else {
            while (player.health > 0 && enemies[attackRandom].health > 0) {
                var playerAttackPoints = Math.floor(Math.random() * (player.attackMax - player.attackMin + 1)) + player.attackMin;
                enemies[attackRandom].health -= playerAttackPoints;
                //console.log("Enemy's current health: " + enemies[attackRandom].health);
                console.log('You attack the ' + enemies[attackRandom].name + ' and it loses ' + playerAttackPoints + ' health points.\n');

                var enemyAttackPoints = Math.floor(Math.random() * (enemies[attackRandom].attackMax - enemies[attackRandom].attackMin + 1)) + enemies[attackRandom].attackMin;
                player.health -= enemyAttackPoints;
                //console.log("Player's current health: " + player.health);
                console.log('The ' + enemies[attackRandom].name + ' attacks back and you lose ' + enemyAttackPoints + ' health points.');
            }
            if (player.health > 0) {
                console.log("You have defeated the " + enemies[attackRandom].name + ". After searching the " + enemies[attackRandom].name + ", you find a " + enemies[attackRandom].item + ".\nIt is now added to your inventory. Good job!\n");
                player.items.push(enemies[attackRandom].item + " ");
                console.log("You receive and additonal 15 health points.");
                player.health += 15;

                do {
                    var choiceIndex = ask.keyInSelect(choices, "What do you want to do?: ");

                    if (choices[choiceIndex] === "Display Your Info") {
                        console.log("\nName: " + player.name + "\nCurrent Health Points: " + player.health + "\nItems Inventory: " + player.items + "\n");
                    } else if (choices[choiceIndex] === "End the Game") {
                        console.log("Thank you for playing. Good bye.");
                        gameOver = true;
                    } else if (choiceIndex === -1) {
                        console.log("Sorry, you must make a choice.")
                    } else if (choices[choiceIndex] === "Keep Playing") {
                        break;
                    }
                } while (choices[choiceIndex] !== "End the Game");
            }
        }
    }
}
