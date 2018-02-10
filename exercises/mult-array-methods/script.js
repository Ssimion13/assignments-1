function sortedOfAge(arr) {
    return peopleArray
        .sort((a, b) => a.lastName.localeCompare(b.lastName)) // sort by last name alphabetically
        .filter(obj => obj.age > 18); // filter out youngins
}
    // return arr.sort((a, b) => {
    //     if (a.firstName > b.firstName) {
    //         return 1;
    //     }
    //     if (a.firstName < b.firstName) {
    //         return -1;
    //     }
    //     return 0;
    // }).filter(obj => return obj.age > 18;
// }

const peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 13
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  }
];


function toDisplayInHTML(arr) {
    return arr
        .sort((a, b) => a.age - b.age)
        .map(person => `<li>${person.firstName} is ${person.age}</li>`);
}
    // let sorted = arr.sort(function(a, b) {
    //     if (a.age < b.age) {
    //         return 1;
    //     }
    //     if (a.age > b.age) {
    //         return -1;
    //     }
    //     return 0;

//     return sorted.map(function(obj) {
//         return `<li>${obj.firstName} is ${obj.age}</li>`;
//     })
// }

console.log(toDisplayInHTML(peopleArray));  //==> ["<li>Rick Sanchez is 78</li>", "<li>Sarah Palin is 47</li>", "<li>Kyle Mooney is 27</li>", "<li>Morty Smith is 13</li>", "<li>Frank Zappa is 12</li>"]
