const nameArr = ['ryan', 'scott', 'nate', 'jordan', 'jared', 'sam', 'kazhta', 'eric'];

const randomTeamPicker = (arr) => {
    let sortedArr = arr.sort(function(a, b) {return 0.5 - Math.random()});
    let newArr = [];
    console.log(sortedArr);
    let team = "";
    for (let i = 0; i < sortedArr.length; i += 2) {
        team = sortedArr[i] + " " + sortedArr[i + 1];
        newArr.push(team);
    }
    return newArr;
}

console.log(randomTeamPicker(nameArr));
