// for (var i = 0; i < cars.length; i++) {
//   console.log(`${cars[i]} goes vroom`);
// }

cars.forEach(function(car) {
    console.log(car + " goes vroom");
})

// for (var i = 0; i < cars.length; i++) {
//   angryCars.push(cars[i].toUpperCase());
// }

function getAngryCars(arr) {
    return arr.map(function(car) {
        return car.toUpperCase();
});

var angryCars = getAngryCars(cars);

var newCars = [];

// for (var i = 0; i < cars.length; i++) {
//   if (cars[i].year > 2005){
//     newCars.push(cars[i]);
//   }
// }

function getNewCars(arr) {
    return arr.filter(function(car) {
        return car.year > 2017;
    })
}

newCars = getNewCars(cars);

// for (var i = 0; i < cars.length; i++) {
//   if (cars[i].model === "E150"){
//     var coolVan = cars[i];
//     break;
//   }
// }

var searchE150 = cars.find(function(car) {
    if (car.model === "E150") {
        var coolVan = car;
    }
    return car.model === "E150";
})

// for (var i = 0; i < cars.length; i++) {
//   if (cars[i].model === "E150"){
//     console.log("It is true that there is one or more E150s");
//     break;
//   }
// }

var containsE150 = cars.some(function(car) {
    return car.model === "E150";
})

if (containsE150) {
    console.log("It is true that there is one or more E150s");
}


// for (var i = 0; i < cars.length; i++) {
//     if (cars[i].make != "E150"){
//         console.log("It is false that every car is an E150");
//     break;
//   }
// }

var allAreE150 = cars.every(function(car) {
    return car.make === E150;
})

if (car.make !== "E150") {
    console.log("It is false that every car is an E150");
}
