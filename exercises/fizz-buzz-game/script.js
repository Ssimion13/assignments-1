var myStr = "";

for (var i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        myStr += "fizzbuzz ";
    } else if (i % 3 === 0) {
        myStr += "fizz ";
    } else if (i % 5 === 0) {
        myStr += "buzz ";
    } else {
        myStr += i + " ";
    }
}
console.log(myStr);
