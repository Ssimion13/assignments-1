function doubleNumbers(arr){
    return arr.map(function(number) {
        return number * 2;
    })
}

//console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

function stringItUp(arr){
    return arr.map(function(number) {
        return number.toString();
    })
}

//console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

function namesOnly(arr){
    return arr.map(function(object) {
        return object.name;
    })
}

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

function thereIsNoSpoon(arr){
    return arr.map(function(object) {
        if (object.age > 18) {
            return object.name + " can go to The Matrix";
        } else {
            return object.name + " is under age!!";
        }
    })
}

console.log(thereIsNoSpoon([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

function readyToPutInTheDOM(arr){
    return arr.map(function(object){
        return "<h1>" + object.name + "</h1><h2>" + object.age + "</h2>";
    })
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
