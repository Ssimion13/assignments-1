// function countCode(string) {
//     var count = 0;
//     var lowString = string.toLowerCase();
//
//     for (var i = 0; i < string.length - 3; i++) {
//             if (lowString[i] + lowString[i + 1] + lowString[i + 3] === "coe") {
//                 count++;
//                 i += 3;
//             }
//     }
//     console.log(count);
// }

function countCode(str) {
    return str.split("").reduce(function(count, char, index, arr) {
        if (char + arr[index + 1] + arr[index + 3] === "coe") {
            count++;
        }
        return count;
    }, 0);
}

console.log(countCode("codecode789xxcodecodexxcodecodexxco5e"));
countCode("aaacodebbb");
countCode("codexxcode");
countCode("cozexxcope");
