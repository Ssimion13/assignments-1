// function getLetterFrequency(str) {
//     var onceStr = "";
//     var extrasStr = "";
//
//     for (var i = 0; i < str.length; i++) {
//         if (!onceStr.includes(str[i])) {
//             onceStr += str[i];
//         } else {
//             extrasStr += str[i];
//         }
//     }
//     console.log(onceStr);
//     //console.log(extrasStr);
//     var countArr = [];
//     for (var i = 0; i < onceStr.length; i++) {
//         var count = 1;
//         for(var j = 0; j < extrasStr.length; j++) {
//             if (onceStr[i] === extrasStr[j]) {
//                 count++;
//             }
//         }
//         countArr.push(count);
//         console.log("\"" + onceStr[i] + "\"" + ": " + countArr[i]);
//     }
// }

function letterFrequency(str) {
    var onceStr = {};

    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (onceStr[char]) {
            onceStr[char]++;
        } else {
            onceStr[char] = 1;
        }
    }
    return onceStr;
}

// getLetterFrequency("slimy smelly solution");
console.log(letterFrequency("slimy smelly solution"));
