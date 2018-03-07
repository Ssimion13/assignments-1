const shuffle = arr => {
    let newArr = arr;
    let j = 0;
    let temp = 0;

    for (let i = 0; i < newArr.length; i++) {
        j = Math.floor(Math.random() * (i));
        temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
    }
    return newArr;
}


console.log(shuffle([1,2,3,4,5,6,7,8]));
//returns [3,5,4,1,2]
