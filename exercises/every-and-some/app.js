const isTypeNum = (item) => {
    return typeof item === "number";
}

//########################################################

const allOfEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}

const someOfAll = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }
    return false;
}

//########################################################

console.log(allOfEach([1, 2, "3"], isTypeNum));
console.log(allOfEach([1, 2, 3], isTypeNum));
console.log(someOfAll(["1", "2", "3"], isTypeNum));
console.log(someOfAll([1, "2", "3"], isTypeNum));
