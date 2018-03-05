function almostIncreasingSequence(sequence) {

    let sortedArr = sequence.sort((a, b) => {
        return a - b;
    })

    let count = 0;

    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === sortedArr[i + 1]) {
            count++;
        }
    }
    if (count > 1) {
        return false;
    }
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] > sortedArr[i + 1]) {
            count++;
            console.log(count);
        }
    }
    if (count < 2) {
        return true;
    }
    return false;
}

console.log(almostIncreasingSequence([1, 3, 2]));

//###################################################################

// function makeArrayConsecutive2(statues) {
//     let extrasArr = [];
//     let statuesArr = statues.sort((a, b) => a - b);
//
//     let smallest = 21;
//     let largest = 0;
//
//     for (let i = 0; i < statuesArr.length; i++) {
//         if (statues[i] > largest) {
//             largest = statues[i];
//         }
//         if (statues[i] < smallest) {
//             smallest = statues[i];
//         }
//     }
//
//     return ((largest - smallest) + 1) - statues.length;
// }
//
// console.log(makeArrayConsecutive2([5, 2, 8, 4, 14]));
