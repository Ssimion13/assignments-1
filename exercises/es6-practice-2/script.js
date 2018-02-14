function collectAnimals(...animals) {
    return animals.sort(function(a, b) {
        return a > b;
    });
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]


const fruit = ["apple", "pear"];
const sweets = ["cake", "pie"];
const vegetables = ["carrit"];

const food = {fruit: ["apple", "pear"],
                sweets: ["cake", "pie"],
                vegetables: ["carrit"]
            };
console.log(food);


const vacation = {
  location: "Burly Idaho",
  duration: "2 weeks"
};

const {location, duration} = vacation;

console.log(`We're going to have a good time in ${location} for ${duration}`);

//
// const firstItem = items[0];
//
// const [firstItem] = items;


const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const [firstFav, secondFav, thirdFav] = favoriteActivitiesInOrder;

console.log(`My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`);


function combineAnimals(...animals) {
    return animals.sort(function(a, b) {
        return a > b;
    })
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(...realAnimals, ...magicalAnimals, ...mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]


var numbers = [a,b,c,d,e];

function product(...numbers) {
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}


function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
