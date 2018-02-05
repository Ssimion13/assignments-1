function Enemy () {
    this.type = getEnemyType();
    this.hitPoints = getEnemyHitPoints(this.type);
    this.defense = this.hitPoints * 3;
}

var enemies = [];
var enemyTypes = ["Ancient Dragon", "Prowler", "Mighty Grunt"];

function getEnemyType() {
    var index = Math.floor(Math.random() * enemyTypes.length);
    return enemyTypes[index];
}

function getEnemyHitPoints(enemyType) {
    if (enemyType === "Ancient Dragon") {
        return Math.floor(Math.random() * 21) + 80;
    } else if (enemyType === "Prowler") {
        return Math.floor(Math.random() * 30) + 50;
    } else {
        return Math.floor(Math.random() * 30) + 20;
    }
}

for (var i = 0; i < 101; i++) {
    enemies.push(new Enemy());
}

console.log(enemies);
