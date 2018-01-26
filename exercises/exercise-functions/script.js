function sumTwoNums(a, b) {
    return a + b;
}

function getLargest(a, b, c) {
    var largest = 0;

    if (a > largest) {
        largest = a;
        if (b > largest) {
            largest = b;
            if (c > largest) {
                largest = c;
            }
        }
    }
    return largest;
}

function stringFun(str) {
    if (str.length <= 20) {
        return str + str;
    } else {
        return str.slice(0, str.length / 2)
    }
}

function fibonacci(n) {
    var num1 = 1;
    var num2 = 1;
    var sum = 0;
    var tempNum = 0;

    for (var i = 1; i <= n; i++) {
        if (n === 1){
            console.log(1);
            return 1;
        }
        if (n === 2) {
            console.log(1);
            console.log(1);
            return 2;
        }

        if (i === 1) {
            console.log(num1);
            console.log(num2);
            sum += 2;
        } else {
            console.log(num1 + num2);
            tempNum = num1;
            num1 = num2;
            num2 = tempNum + num2;
            sum += num2;
        }
    }
    return sum;
}
//fibonacci(10);

// Adapted from https://stackoverflow.com/questions/33454438/quadratic-equation-solver-javascript
function quadraticEquation(a, b, c) {
    var resultArr = [];
    var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    resultArr.push(result);
    resultArr.push(result2);
    return resultArr;
}

function mostOccuringLetter(str) {
    var finalLetter = "";
    var sum = 0;

    for (var i = 0; i < str.length; i++) {
        var tempSum = 0;
        for (var j = 0; j < str.length; j++) {
            if (str.charAt(i) === str.charAt(j)) {
                tempSum += 1;
            }
        }
        if (tempSum > sum) {
            sum = tempSum;
            finalLetter = str.charAt(i);
        }
    }
    return finalLetter;
}

console.log(mostOccuringLetter("bookeeper"));
