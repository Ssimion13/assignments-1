function getLetterFrequency(str) {
    var onceStr = "";
    var extrasStr = "";

    for (var i = 0; i < str.length; i++) {
        if (!onceStr.includes(str[i])) {
            onceStr += str[i];
        } else {
            extrasStr += str[i];
        }
    }
    console.log(onceStr);
    console.log(extrasStr);
    var countArr = [];
    for (var i = 0; i < onceStr.length; i++) {
        var count = 1;
        for(var j = 0; j < extrasStr.length; j++) {
            if (onceStr[i] === extrasStr[j]) {
                count++;
            }
        }
        countArr += count;
        //console.log("\"" + onceStr[i] + "\"" + ": " + count);
    }
    finalStr = "";
    for (var i = 0; i < countArr.length; i++) {
        
        if (countArr[i] > )
    }
}

getLetterFrequency("slimy smelly solution");
