var ask = require('readline-sync');

function displayGameName() {
console.log("\nWelcome to the awesome game: \n");
console.log(" ____  ___  _      ___  ____  ____    _    _          _    ______     _______ _   _ _____ _   _ ____  _____ ");
console.log("/ ___|/ _ \\| |    / _ \\/ ___|/ ___|  / \\  | |        / \\  |  _ \\ \\   / / ____| \\ | |_   _| | | |  _ \\| ____|");
console.log("| |  | | | | |   | | | \\___ \\\\___ \\ / _ \\ | |       / _ \\ | | | \\ \\ / /|  _| |  \\| | | | | | | | |_) |  _|");
console.log("| |__| |_| | |___| |_| |___) |___) / ___ \\| |___   / ___ \\| |_| |\\ V / | |___| |\\  | | | | |_| |  _ <| |___");
console.log("\\____|\\___/|_____|\\___/|____/|____/_/   \\_\\_____| /_/   \\_\\____/  \\_/  |_____|_| \\_| |_|  \\___/|_| \\_\\_____|");
}

function walk() {
    return Math.floor(Math.random() * (enemies.length + 6));
}

function getPreFightChoice (fightOrFlight, enemy) {
    var selectionGood = false;
    console.log("\nA " + enemy.name + " has appeared!");
    choiceIndex = ask.keyInSelect(preFightChoices, 'What will you do?: ');
    while (!selectionGood) {
        if (choiceIndex === -1) {
            choiceIndex = ask.keyInSelect(preFightChoices,'Sorry, no cancelling. What will you do?: ');
        } else if (preFightChoices[choiceIndex] === 'Attack' || preFightChoices[choiceIndex] === 'Run Away') {
            fightOrFlight = preFightChoices[choiceIndex];
            selectionGood = true;
        }
    }
    return fightOrFlight;
}

function runAway() {
    var chance = Math.random() + 1;
    return chance < 1.5;
}

function fight() {
    getFightChoice();
    while (player.health > 0 && enemies[attackRandom].health > 0) {
        itemChoice = useItem();
        attackEnemy();
        enemyAttack();
    }
    return;
}

function getFightChoice() {

}

function useItem() {
    var itemChoice = "undefined";

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

function getPostFightChoice(gameOver) {
    do {
        var choiceIndex = ask.keyInSelect(postFightChoices, "What do you want to do?: ");

        if (postFightChoices[choiceIndex] === "Display Your Info") {
            showInfo();
        } else if (postFightChoices[choiceIndex] === "End the Game") {
            console.log("Thank you for playing. Good bye.");
            gameOver = true;
        } else if (choiceIndex === -1) {
            console.log("\nSorry, you must make a choice.")
        } else if (postFightChoices[choiceIndex] === "Keep Playing") {
            break;
        }
    } while (postFightChoices[choiceIndex] !== "End the Game");
    return gameOver;
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

//*******************************************************************************************************

var playerAttackPoints = 0;
var enemyAttackPoints = 0;

var possibleItems = ["knife", "axe", "magic potion"];

var player = new Player("", 5, 10, 50, []);

var enemies = [
    enemyOne = new Enemy("Fanged Rabbit", 2, 4, 15, possibleItems[Math.floor(Math.random() * possibleItems.length)]),
    enemyTwo = new Enemy("Snollygoster", 4, 7, 25, possibleItems[Math.floor(Math.random() * possibleItems.length)]),
    enemyThree = new Enemy("Bloody Bones", 5, 9, 35, possibleItems[Math.floor(Math.random() * possibleItems.length)])
];

var gameOver = false;

var preFightChoices = ["Attack", "Run Away"];
var fightChoices = ["Attack", "Use Item"];
var postFightChoices = ["Keep Playing", "Display Your Info", "End the Game"];

//******************************************************************************************************

displayGameName();
var name = ask.question("\n Enter your name: ");

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
        var fightOrFlight = "";
        var attackOrRun = getPreFightChoice(fightOrFlight, enemies[attackRandom]);

        if (attackOrRun === 'Run Away') {
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
                console.log("You have defeated the enemy! After searching the carcas of the " + enemies[attackRandom].name + ", you find a " + enemies[attackRandom].item + ".\nIt is now added to your inventory. Good job!\n");
                player.items.push(" " + enemies[attackRandom].item);
                console.log("You receive an additonal 5 health points.");
                player.health += 5;

                gameOver = getPostFightChoice(gameOver);

            } else {
                die();
                gameOver = true;
            }
        }
    }
}
