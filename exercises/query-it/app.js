const filterDatabase = (obj, database) => {
    if (JSON.stringify(obj) === '{}') {
        return database;
    }
    
}

const database = [
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2}
];

// console.log(filterDatabase({}, database));
    //returns entire database array

console.log(filterDatabase({dolphin: "squeak!"}, database));
    //returns empty array

filterDatabase({firstName: "Jack", age: 2}, database);
    //returns
[
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jack", lastName: "White", age: 2}
]
