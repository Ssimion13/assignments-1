// preliminaries
for (var i = 0; i < 10; i++) {
    //console.log(i);
}

for (var i = 9; i >= 0; i--) {
    //console.log(i);
}

var fruits = ["banana", "orange", "apple", "kiwi"];

for (var i = 0; i < fruits.length; i++) {
    //console.log(fruits[i]);
}

// Bronze

var newArr = [];

for (var i = 0; i < 10; i++) {
    newArr[i] = i;
}

for (var i = 0; i < 101; i += 2) {
    //console.log(i);
}

var fruits2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

for (var i = 0; i < fruits2.length; i += 2) {
    //console.log(fruits2[i]);
}

// Silver
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
];

for (var i = 0; i < peopleArray.length; i++) {
    //console.log(peopleArray[i].name);
}

var namesArr = [];
var occupationsArr = [];

for (var i = 0; i < peopleArray.length; i++) {
    namesArr.push(peopleArray[i].name);
    occupationsArr.push(peopleArray[i].name);
}

//console.log(namesArr);
//console.log(occupationsArr);

var everyOtherNames = [];
var everyOtherOcc = [];

for (var i = 0; i < peopleArray.length; i += 2) {
    everyOtherOcc.push(peopleArray[i + 1].occupation);
    everyOtherNames.push(peopleArray[i].name);
}

//console.log(everyOtherNames);
//console.log(everyOtherOcc);

// Gold
var newArr = [];

for (var i = 0; i < 3; i++) {
    newArr.push([0, 0, 0]);
}

//console.log(newArr);

var newArr2 = [];

for (var i = 0; i < 3; i++) {
    newArr2.push([i, i, i]);
}

//console.log(newArr2);

var newArr3 = [];

for (var i = 0; i < 3; i++) {
    newArr3.push([0, 1, 2]);
}

//console.log(newArr3);
var newArr4 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

for (var i = 0; i < newArr4.length; i++) {
    for (var j = 0; j < newArr4[i].length; j++) {
        newArr4[i][j] = 0;
    }
}

console.log(newArr4);
