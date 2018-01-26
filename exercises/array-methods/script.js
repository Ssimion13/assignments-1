var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

fruit.shift();

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

console.log(fruit.indexOf("orange"));

fruit.push(fruit.indexOf("orange"));

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

console.log(vegetables.length);

vegetables.push(vegetables.length);

var food = fruit.concat(vegetables);

console.log(food);

food.splice(4, 2);

console.log(food);

food.reverse(food);

console.log(food);

console.log(food.join());
