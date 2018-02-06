
var getType = function() {
    return wizardTypes[Math.floor(Math.random() * 3)];
}

var getHatType = function(wizard) {
    return hatTypes[Math.floor(Math.random() * 3)];
}

var getStaffType = function(wizard) {
    return staffTypes[Math.floor(Math.random() * 3)];
}

var wizardTypes = ["High", "Medium", "Low"];
var hatTypes = ["Pointy", "Flat", "Beret"];
var staffTypes = ["Tall", "Medium", "Short"];

var Wizard = function() {
    this.type = getType();
    this.hat = getHatType(this);
    this.staff = getStaffType(this);
}

Wizard.prototype.speak = function() {
    console.log("I'm a wizard");
}

Wizard.prototype.castSpell = function() {
    console.log("Abracadabra");
}

var wizards = [];

for (var i = 0; i < 5; i++) {
    wizards.push(new Wizard());
}

console.log(wizards);
