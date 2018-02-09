let name = 'John'
const age = 101
const pets = ["cat", "dog"]

const petObjects = []

for (let i = 0; i < pets.length; i++){
  const pet = {type: pets[i]}
  if (pets[i] === "cat"){
    let name;
    name = "fluffy"
  } else {
    name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}

console.log(petObjects);


const vegetables = carrots.map(function(carrot){
    return {type: "carrot", name: carrot}
})

const vegetables = carrots.map(carrot => ({type: "carrot", name: carrot}));


const friends = people.filter(function(person){
    return !!person.friendly
})

const friends = people.filter(person => !!person.freiendly);


function doMathSum(a, b){
    return a + b
}

var doMathSum = (a, b) => a + b;

var produceProduct = function(a, b){
    return a * b
}

var produceProduct = (a, b) => a * b;


var myFunc = (fName = "Jane", lName = "Doe", age = 100) => `Hi ${fName} ${lName}, how does it feel to be ${age}?`;

console.log(myFunc());


const dogs = animals.filter((animal)=>{
  if (animal.type === "dog"){
    return true
  } else {
    return false
  }
})

const dogs = animals.filter(animal => animal.type === "dog");


const hawaiiFunc = (location, name) => `
Hi ${name}!

Welcome to ${location}.

I hope you enjoy your say. Please ask the president of ${location} if you n
eed anything.`;

console.log(hawaiiFunc("Hawaii", "Janice"));
