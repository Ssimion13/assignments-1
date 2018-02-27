// const inputArray = ["this", "is", "an", "array"];
const inputArray = ["this", "is", "an", "array", "And so it", "this array"];


const longestThree = (arr) => {
    let count = 0;
    let newArr = [];

    for (let i = 0; i < arr.length - 2; i++) {
        if ((arr[i].length + arr[i + 1].length + arr[i + 2].length) > count) {
            count = (arr[i].length + arr[i + 1].length + arr[i + 2].length);
            newArr = [arr[i], arr[i + 1], arr[i + 2]];
        }
    }
    return newArr;
}

console.log(longestThree(inputArray));
