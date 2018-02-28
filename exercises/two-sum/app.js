const twoSum = (arr, int) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === int) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum([1,2,3], 4));
console.log(twoSum([1,2,3], 5));
console.log(twoSum([1,2,3], 3));
console.log(twoSum([1,2, 0, 5, 7,3], 4));
console.log(twoSum([1,2,3], 3));
console.log(twoSum([1,2,3], 4));
console.log(twoSum([1,2,3, 8, 4], 12)); 
//returns [0, 2] because 1 + 3 equals 4
