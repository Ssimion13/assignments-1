const palindromeFinder = str => {
    let newStr = str.toLowerCase();
    let newArr = newStr.split("");

    newArr = newArr.filter(char => char.match(/^[0-9a-z]+$/));

    newStr = newArr.join("");

    let otherNewArr = newArr.reverse();
    let otherNewStr = otherNewArr.join("");

    return newStr === otherNewStr;
}

console.log(palindromeFinder("Madam, I'm adam"));
console.log(palindromeFinder("Not a palindrome"));
