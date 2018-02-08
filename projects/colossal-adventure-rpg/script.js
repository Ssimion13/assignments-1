var ask = require('readline-sync');

function displayGameName() {
    console.log("\nWelcome to the awesome game: \n");
    console.log(" ____  ___  _      ___  ____  ____    _    _          _    ______     _______ _   _ _____ _   _ ____  _____ ");
    console.log("/ ___|/ _ \\| |    / _ \\/ ___|/ ___|  / \\  | |        / \\  |  _ \\ \\   / / ____| \\ | |_   _| | | |  _ \\| ____|");
    console.log("| |  | | | | |   | | | \\___ \\\\___ \\ / _ \\ | |       / _ \\ | | | \\ \\ / /|  _| |  \\| | | | | | | | |_) |  _|");
    console.log("| |__| |_| | |___| |_| |___) |___) / ___ \\| |___   / ___ \\| |_| |\\ V / | |___| |\\  | | | | |_| |  _ <| |___");
    console.log("\\____|\\___/|_____|\\___/|____/|____/_/   \\_\\_____| /_/   \\_\\____/  \\_/  |_____|_| \\_| |_|  \\___/|_| \\_\\_____|");
}

function displayItem(item) {
    if (item === "knife") {
        displayKnife();
    } else if (item === "axe") {
        displayAxe();
    } else {
        displayPotion();
    }
    return;
}

function displayKnife() {
    console.log("    ___________ _____________");
    console.log("   |           )._______.-'");
    console.log("   `----------'");
    return;
}

function displayAxe() {
    console.log("    _________________.---.______");
    console.log("   (_(______________(_o o_(____()");
    console.log("                .___.'. .'.___.");
    console.log("                \\ o    Y    o /");
    console.log("                 \\ \\__   __/ /");
    console.log("                  '.__'-'__.'");
    console.log("                      '''");
    return;
}

function displayPotion() {
    console.log("    _");
    console.log("   {_}");
    console.log("   |(|");
    console.log("   |=|");
    console.log("  /   \\");
    console.log("  |.--|");
    console.log("  ||  |");
    console.log("  ||  |");
    console.log("  |'--|");
    console.log("  '-=-'");
    return;
}

function displayFangedRabbit() {
    console.log("    __    __");
    console.log("   / \\\\..// \\");
    console.log("     ( oo ) ");
    console.log("      \\WW/");
    return;
}

function displaySnollygoster() {
    console.log("    .      .");
    console.log("    |\\____/|");
    console.log("   (\\|----|/)");
    console.log("    \\ 0  0 /");
    console.log("     |    |");
    console.log("  ___/\\../\\____");
    console.log(" /     --       \\");
    console.log("/  \\         /   \\");
    console.log("|    \\___/___/(   |");
    console.log("\\   /|  }{   | \\  )");
    console.log("\\  ||__}{__|  |  |");
    console.log(" \\  |;;;;;;;\\  \\ / \\_______");
    console.log("  \\ /;;;;;;;;| [,,[|======'");
    console.log("    |;;;;;;/ |     /");
    console.log("    ||;;|\\   |");
    console.log("    ||;;/|   /");
    console.log("    \\_|:||__|");
    console.log("     \\ ;||  /");
    console.log("     |= || =|");
    console.log("     |= /\\ =|");
    console.log("     /_/  \\_\\");
    return;
}

function displayBloodyBones() {
    console.log("    <>=======()");
    console.log("   (/\\___   /|\\\\          ()==========<>_");
    console.log("         \\_/ | \\\\        //|\\   ______/ \\)");
    console.log("           \\_|  \\\\      // | \\_/");
    console.log("             \\|\\/|\\_   //  /\\/");
    console.log("              (oo)\\ \\_//  /");
    console.log("             //_/\\_\\/ /  |");
    console.log("            @@/  |=\\  \\  |");
    console.log("                 \\_=\\_ \\ |");
    console.log("                   \\==\\ \\|\\_");
    console.log("                __(\\===\\(  )\\\\");
    console.log("               (((~) __(_/   |");
    console.log("                    (((~) \\  /");
    console.log("                    ______/ /");
    console.log("                    '------'");
    return;
}

//******************************************************************************************************

var walk = function() {
    return Math.floor(Math.random() * (enemyNames.length + 6));
}

var getPreFightChoice = function(enemy) {
    var fightOrFlight = "";
    var selectionGood = false;
    if (enemy.name === "Fanged Rabbit") {
        displayFangedRabbit();
    } else if (enemy.name === "Snollygoster") {
        displaySnollygoster();
    } else {
        displayBloodyBones();
    }
    console.log("\nA " + enemy.name + " has appeared!");
    displayEnemyInfo(currentEnemy);
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

var runAway = function() {
    var chance = Math.random() + 1;
    return chance < 1.5;
}

var fight = function(player, enemy) {
    while (player.health > 0 && currentEnemy.health > 0) {
        var choice = getFightChoice();

        if (choice === "Use Item") {
            var itemToUse = getItemToUse(player);
            if (itemToUse === "knife") {
                enemy.health -= 15;
                console.log("\nYou attack the " + enemy.name + " with your " + itemToUse + " and it loses 15 health points.\n");
            } else if (itemToUse === "axe") {
                enemy.health -= 25;
                console.log("\nYou attack the " + enemy.name + " with your " + itemToUse + " and it loses 25 health points.\n");
            } else if (itemToUse === "magic potion") {
                player.health += 15;
                console.log("\nYou drink the potion and you gain an addtional 15 health points.\n");
            } else {
                console.log("\nYou have no items to use!\n");
                attackEnemy();
            }
            enemyAttack();
        } else {
            attackEnemy();
            enemyAttack();
        }
    }
    return;
}


var getEnemyName = function() {
    return enemyNames[Math.floor(Math.random() * enemyNames.length)];
}

var getEnemyHealth = function(enemy) {
    if (enemy.name === "Fanged Rabbit") {
        return Math.floor(Math.random() * (20 - 10 + 1) + 10);
    } else if (enemy.name === "Prowler") {
        return Math.floor(Math.random() * (30 - 20 + 1) + 20);
    } else {
        return Math.floor(Math.random() * (40 - 30 + 1) + 30);
    }
}

var getEnemyAttackMin = function(enemy) {
    if (enemy.name === "Fanged Rabbit") {
        return 2;
    } else if (enemy.name === "Prowler") {
        return 4;
    } else {
        return 5;
    }
}

var getEnemyAttackMax = function(enemy) {
    if (enemy.name === "Fanged Rabbit") {
        return 4;
    } else if (enemy.name === "Prowler") {
        return 7;
    } else {
        return 9;
    }
}

var getEnemyItem = function(enemy) {
    return possibleItems[Math.floor(Math.random() * possibleItems.length)];
}

var getFightChoice = function(player) {
        var choiceIndex = ask.keyInSelect(fightChoices, "What do you want to do?: ");
        while (choiceIndex !== -1) {
            if (choiceIndex === -1) {
                console.log("\nSorry, you must make a choice.")
            } else {
                return fightChoices[choiceIndex];
            }
        }
}

var getItemToUse = function(player) {
    if (player.items.length !== 0) {
        var itemToUse = ask.keyInSelect(player.items, "Select an item to use?: ");
        return player.items[itemToUse];
    }

}

var attackEnemy = function() {
    playerAttackPoints = Math.floor(Math.random() * (player.attackMax - player.attackMin + 1)) + player.attackMin;
    currentEnemy.health -= playerAttackPoints;
    console.log('\nYou attack the ' + currentEnemy.name + ' and it loses ' + playerAttackPoints + ' health points.');
}

var enemyAttack = function() {
    if (currentEnemy.health > 0) {
        enemyAttackPoints = Math.floor(Math.random() * (currentEnemy.attackMax - currentEnemy.attackMin + 1)) + currentEnemy.attackMin;
        player.health -= enemyAttackPoints;
        console.log('The ' + currentEnemy.name + ' attacks back and you lose ' + enemyAttackPoints + ' health points.');
    }
}

var getPostFightChoice = function(gameOver) {
    do {
        var choiceIndex = ask.keyInSelect(postFightChoices, "What do you want to do?: ");

        if (postFightChoices[choiceIndex] === "Display Your Info") {
            displayPlayerInfo();
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

var die = function() {
    console.log('\nThe ' + currentEnemy.name + ' ate you. You\'re dead.\n\nThanks for playing, ' + player.name + '!');
    return;
}

var displayPlayerInfo = function() {
    console.log("\nName: " + player.name +
        "\nCurrent Health Points: " + player.health +
        "\nItems Inventory:" + player.items + "\n");
    return;
}

var displayEnemyInfo = function(enemy) {
    console.log("\nName: " + enemy.name +
        "\nHealth Points: " + enemy.health +
        "\nMinimum Attack Points: " + enemy.attackMin +
        "\nMaximum Attack Points: " + enemy.attackMax);
    return;
}

var createEnemy = function() {
    var newEnemy = new Enemy();
    return newEnemy;
}

var enemyDies = function() {

}

var Player = function(name, attackMin, attackMax, health, items) {
    this.name = name;
    this.attackMin = attackMin;
    this.attackMax = attackMax;
    this.health = health;
    this.items = items;
}

var Enemy = function() {
    this.name = getEnemyName();
    this.attackMin = getEnemyAttackMin(this);
    this.attackMax = getEnemyAttackMax(this);
    this.health = getEnemyHealth(this);
    this.item = getEnemyItem();
}

//*******************************************************************************************************

var playerAttackPoints = 0;
var enemyAttackPoints = 0;

var player = new Player("", 5, 10, 50, []);

var enemyNames = ["Fanged Rabbit", "Snollygoster", "Bloody Bones"];
var possibleItems = ["knife", "axe", "magic potion"];

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
        console.log('\nIt was a peaceful walk. No enemies in sight. You gained an addtional 2 health points.');
        player.health += 2;
    } else {
        var currentEnemy = createEnemy();
        var fightOrFlight = "";
        var attackOrRun = getPreFightChoice(currentEnemy);

        if (attackOrRun === 'Run Away') {
            var survived = runAway();

            if (survived) {
                console.log('\nYou got away! But the ' + currentEnemy.name + ' attacks from behind and you lose ' + (Math.floor(Math.random() * (currentEnemy.attackMax) + currentEnemy.attackMin)) + ' health points.');
            } else {
                die();
                gameOver = true;
            }
        } else {
            fight(player);
            if (player.health > 0) {
                console.log("You have defeated the enemy! After searching the carcas of the " + currentEnemy.name + ", you find a " + currentEnemy.item + ".");
                displayItem(currentEnemy.item);
                console.log("\nIt is now added to your inventory. Good job!\n");
                player.items.push(" " + currentEnemy.item);
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
