let firstThree = function(str, char) {

    var newStr = str;
    newStr += str.indexOf(char);
    newStr += str.lastIndexOf(char);
    newStr += newStr.concat(str);

    //console.log(newStr);

    //.concat()
    //.indexOf()
    //.lastIndexOf()
}

firstThree("people", "p");

let secondThree = function(str, oldStr, repStr) {

    var newStr = str.replace(oldStr, repStr);
    console.log(newStr);
    newStr += newStr.slice(0, 3);
    console.log(newStr);
    console.log(str.match(oldStr));

    //.match()
    //.replace()
    //.slice()
}

secondThree("The rain in SPAIN stays mainly in the plain", "rain", "sun");

let finalFour = function(str) {

    var upperStr = str.toUpperCase();
    var lowerStr = str.toLowerCase();
    var splitArr = [];
    splitArr = str.split("");

    console.log(upperStr);
    console.log(lowerStr);
    console.log(splitArr);
    console.log(str.substr(1, 5));

    //.split()
    //.toLowerCase()
    //.toUpperCase()
    //.substr()
}

finalFour("The rain in SPAIN stays mainly in the plain");
