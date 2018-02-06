// var wizardsArr = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"];
//
// wizardsArr.forEach(function(wizard) {
//     console.log(wizard);
// })

var wizards = [
  {
    name: "Edwin Odesseiron",
    age: 37,
    alignment: "lawful evil",
    isAlive: true
  },
  {
    name: "Harry Potter",
    age: 21,
    alignment: "neutral good",
    isAlive: true
  },
  {
    name: "Hermony Granger",
    age: 21,
    alignment: "lawful good",
    isAlive: true
  },
  {
    name: "Ronny the Bear",
    age: 21,
    alignment: "neutral good",
    isAlive: true
  },
  {
    name: "Gandalf",
    age: 100,
    alignment: "neutral good",
    isAlive: true
  }
];

// wizards.forEach(function(wizard) {
//     console.log(wizard.name);
// });

function filterGoodWizards(arr) {
    return wizards.filter(function(wizard) {
        return wizard.alignment === "neutral good";
    })
}

var neutralGoodWizards = filterGoodWizards(wizards);

var indexOfLawfulGoodWizard = wizards.findIndex(function(wizard){
    return wizard.alignment === "lawful good";
})

//console.log(indexOfLawfulGoodWizard);

var areAllAlive = wizards.every(function(wizard) {
    return wizard.isAlive === true;
})

//console.log(areAllAlive);

var isOneNeutralGood = wizards.some(function(wizard){
    return wizard.alignment === "neutral good";
})

//console.log(isOneNeutralGood);

wizards.forEach(function(wizard) {
    if (wizard.alignment === "neutral good") {
        wizard.isAlive = false;
    }
})

//console.log(wizards);

var areAllStillAlive = wizards.every(function(wizard) {
    return wizard.isAlive === true;
})

// console.log(areAllStillAlive);

var areSomeWizardsAlive = wizards.some(function(wizard){
    return wizard.isAlive === true;
})

console.log(areSomeWizardsAlive);
