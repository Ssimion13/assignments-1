const isBalanced = str => {
    let openCount = 0;
    let closeCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            openCount++;
        } else if (str[i] === ")") {
            closeCount++;
            if (closeCount > openCount) {
                return false;
            }
        }
    }
    return openCount === closeCount;

}

console.log(isBalanced("((()))"));
console.log(isBalanced("((())"));
console.log(isBalanced("((c()1)"));
console.log(isBalanced("()(c()1)"));
console.log(isBalanced("none"));
console.log(isBalanced(")()"));
