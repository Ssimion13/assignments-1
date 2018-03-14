const findUniqueItems = (arr1, arr2) => {
    let str = arr1.join("") + arr2.join("");
    let sortedStr = str.split('')
                        .sort((a, b) => a - b)
                        .join("");

    let uniqueArr = [];

    for (let i = 0; i < sortedStr.length; i++) {
        if (sortedStr[i] !== sortedStr[i + 1]) {
            uniqueArr.push(sortedStr[i]);
        } else {
            i++;
        }
    }
    return uniqueArr;
}

const array1 = [1, 2, 5];
const array2 = [4, 2, 1];

console.log(findUniqueItems(array1, array2));
