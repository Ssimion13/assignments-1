const gameOfThrees = (num) => {

    while (num !== 1) {
        if (num % 3 === 0) {
            num /= 3;
        } else if (num % 3 === 2){
            num += 1;
        } else {
            num -= 1;
        }
        console.log(num);
    }
    return num;
}

console.log(gameOfThrees(Math.floor(Math.random() * 300000000)));
