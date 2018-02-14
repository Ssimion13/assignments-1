// Given an array of person objects, return an array of first and last names of
// everyone over 17



const firstLastOverAge = (arr, age) => {
    // filter by age (over age)
    return arr
        .filter(person => person.age > age)
    // map to new array first name last names
        .map(person => `${person.firstName} ${person.lastName}`)
}

const difference = (nums) => nums.reduce((total, num) => total - num);

module.exports = {
    firstLastOverAge,
    difference
};
