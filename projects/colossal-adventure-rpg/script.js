var ask = require('readline-sync');

function walk() {
    return Math.floor(Math.random() * (enemies.length + 6));
}

function runAway() {
    var chance = Math.random() + 1;
    return chance < 1.5;
}

function fight() {
    while (player.health > 0 && enemies[attackRandom].health > 0) {
        attackEnemy();
        enemyAttack();
    }
    return;
}

function attackEnemy() {
    playerAttackPoints = Math.floor(Math.random() * (player.attackMax - player.attackMin + 1)) + player.attackMin;
    enemies[attackRandom].health -= playerAttackPoints;
    console.log('You attack the ' + enemies[attackRandom].name + ' and it loses ' + playerAttackPoints + ' health points.\n');
}

function enemyAttack() {
    if (enemies[attackRandom].health > 0) {
        enemyAttackPoints = Math.floor(Math.random() * (enemies[attackRandom].attackMax - enemies[attackRandom].attackMin + 1)) + enemies[attackRandom].attackMin;
        player.health -= enemyAttackPoints;
        console.log('The ' + enemies[attackRandom].name + ' attacks back and you lose ' + enemyAttackPoints + ' health points.');
    }
}

function die() {
    console.log('\nThe ' + enemies[attackRandom].name + ' ate you. You\'re dead.\n\nThanks for playing, Ryan!');
}

function showInfo() {
    console.log("\nName: " + player.name + "\nCurrent Health Points: " + player.health + "\nItems Inventory:" + player.items + "\n");
}

function enemyDie() {

}

function enemyCreation() {

}

function Player (name, attackMin, attackMax, health, items) {
    this.name = name;
    this.attackMin = attackMin;
    this.attackMax = attackMax;
    this.health = health;
    this.items = items;
}

function Enemy (name, attackMin, attackMax, health, item) {
    this.name = name;
    this.attackMin = attackMin;
    this.attackMax = attackMax;
    this.health = health;
    this.item = item;
}

var playerAttackPoints = 0;
var enemyAttackPoints = 0;

var possibleItems = ["black pearl", "red jewel", "magic staff", "knife", "axe", "magic potion"];

var player = new Player("", 5, 10, 50, []);

var enemies = [
    enemyOne = new Enemy("Fanged Rabbit", 2, 4, 15, possibleItems[Math.floor(Math.random() * possibleItems.length)]),
    enemyTwo = new Enemy("Snollygoster", 4, 7, 25, possibleItems[Math.floor(Math.random() * possibleItems.length)]),
    enemyThree = new Enemy("Bloody Bones", 5, 9, 35, possibleItems[Math.floor(Math.random() * possibleItems.length)])
];

var gameOver = false;
var choices = ["Keep Playing", "Display Your Info", "End the Game"];

var name = ask.question('Welcome to the awesome game: << Colossal Adventure >>\n\n Enter your name: ');

player.name = name;

while (!gameOver) {

    var walking = ask.question('\nOkay, ' + player.name + ', enter a \'w\' to begin walking: ');

    while (walking !== 'w') {
        walking = ask.question('\nEnter a \'w\' to begin walking: ');
    }

    var attackRandom = walk();

    if (attackRandom > 2) {
        console.log('\nIt was a peaceful walk. No enemies in sight.');
    } else {
        var selectionGood = false;
        var fightOrFlight = ask.question('\nA ' + enemies[attackRandom].name + ' has appeared! Press \'a\' to attack, or \'r\' to run: ');
        while (!selectionGood) {
            if (fightOrFlight !== 'a' && fightOrFlight !== 'r') {
                fightOrFlight = ask.question('Press \'a\' to attack, or \'r\' to run: ');
            } else {
                selectionGood = true;
            }
        }

        if (fightOrFlight === 'r') {
            var survived = runAway();

            if (survived) {
                console.log('\nYou got away! But the ' + enemies[attackRandom].name + ' attacks from behind and you lose ' + (Math.floor(Math.random() * (enemies[attackRandom].attackMax) + enemies[attackRandom].attackMin)) + ' health points.');
            } else {
                die();
                gameOver = true;
            }
        } else {
            fight();
            if (player.health > 0) {
                console.log("You have defeated the " + enemies[attackRandom].name + ". After searching the " + enemies[attackRandom].name + ", you find a " + enemies[attackRandom].item + ".\nIt is now added to your inventory. Good job!\n");
                player.items.push(" " + enemies[attackRandom].item);
                console.log("You receive an additonal 5 health points.");
                player.health += 5;

                do {
                    var choiceIndex = ask.keyInSelect(choices, "What do you want to do?: ");

                    if (choices[choiceIndex] === "Display Your Info") {
                        showInfo();
                    } else if (choices[choiceIndex] === "End the Game") {
                        console.log("Thank you for playing. Good bye.");
                        gameOver = true;
                    } else if (choiceIndex === -1) {
                        console.log("Sorry, you must make a choice.")
                    } else if (choices[choiceIndex] === "Keep Playing") {
                        break;
                    }
                } while (choices[choiceIndex] !== "End the Game");
            } else {
                die();
                gameOver = true;
            }
        }
    }
}
