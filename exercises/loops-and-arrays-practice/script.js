var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var counter = 0;
for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        counter += 1;
    }
}
console.log(counter);

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12
  },{
    name: "Madeline",
    age: 80
  },{
    name: "Cheryl",
    age: 22
  },{
    name: "Sam",
    age: 30
  },{
    name: "Suzy",
    age: 4
  }
]

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 17) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max.");
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough to see Mad Max.");
    }
}

var testArr1 = [2, 5, 435, 4, 2];
var testArr2 = [1, 1, 1, 1, 3];
var testArr3 = [9, 3, 4, 2];

var counter = 0;

for (var i = 0; i < testArr2.length; i++) {
    counter += testArr2[i];
}

if (counter % 2 === 0) {
    console.log("light is off");
} else {
    console.log("light is on");
}
