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
    var unique = {};

    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (unique[char]) {
            unique[char]++;
        } else {
            unique[char] = 1;
        }
    }
    return unique;
}

// getLetterFrequency("slimy smelly solution");
//console.log(letterFrequency("slimy smelly solution"));



// Sorty-McSortSort
var users = [
    {
        firstName: "Billy",
        lastName: "Madison",
        age: 32
    },
    {
        firstName: "Tommy",
        lastName: "Pickles",
        age: 32
    },
    {
        firstName: "Ray",
        lastName: "Charles",
        age: 32
    },
    {
        firstName: "Lady",
        lastName: "Gaga",
        age: 32
    },
    {
        firstName: "Elizabeth",
        lastName: "Taylor",
        age: 32
    },
    {
        firstName: "Led",
        lastName: "Zeplin",
        age: 32
    },
    {
        firstName: "Micael",
        lastName: "Johnson",
        age: 32
    },
    {
        firstName: "Keri",
        lastName: "Strug",
        age: 32
    },
    {
        firstName: "Chucky",
        lastName: "Finster",
        age: 32
    },
    {
        firstName: "Angelica",
        lastName: "Pickles",
        age: 32
    },
]

var sortAscending = true;

var sortedArr = users.sort()
