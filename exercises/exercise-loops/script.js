function printLetters(str) {
    for (var i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}

//printLetters("this is a string");

function findChar(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            return i;
        }
    }
    return "character not found in the string";
}

//console.log(findChar("scranton", "e"));

function find42(numArr) {
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] === 42) {
            return "42 was found";
        }
    }
    return "42 was not found";
}

//console.log(find42([1, 13, 22, 3, 43, 55, 76]));

function findSmallestNum(numArr) {
    var smallest = 100000000;
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] < smallest) {
                smallest = numArr[i];
        }
    }
    return smallest;
}
console.log(findSmallestNum([4, 77, 5, 8, 43, 21, 24, 1, 7, 88]));
