var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

function printNicely(arr) {
    return arr.join(" ");
}

//console.log(printNicely(lyrics));

function reverse(arr) {
    return arr.reverse().join(" ");
}

//console.log(reverse(lyrics));

function everyOther(arr) {
    var myStr = "";

    for (i = 0; i < arr.length; i += 2) {
            myStr += arr[i] + " ";
    }
    return myStr;
}

//console.log(everyOther(lyrics));

function reverseEveryTwo(arr) {
    var myStr = "";


    for (i = 0; i < arr.length; i += 2) {
        if (i !== arr.length - 1) {
            myStr += arr[i + 1] + " " + arr[i] + " ";
        } else {
        myStr += arr[i];
        }
    }
    return myStr;
}

console.log(reverseEveryTwo(lyrics));
