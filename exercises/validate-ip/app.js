const isIpAddress = str => {
    const newArr = str.split('.');
    return newArr.length === 4 && newArr.every(str => Number(str < 256 && str > 0));
}

console.log(isIpAddress('172.16.254.1'));
console.log(isIpAddress('123.5a.67.345'));
