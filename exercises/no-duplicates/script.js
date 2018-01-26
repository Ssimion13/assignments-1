function removeDuplicates(originalString) {
    var noDuplicatesString = "";
    var extras = "";
    for(var i = 0; i < originalString.length; i++) {
        if (noDuplicatesString.includes(originalString[i])) {
            extras += originalString[i];
        } else {
            noDuplicatesString += originalString[i];
        }
    }
    console.log("No duplicates: " + noDuplicatesString + " The Extras: " + extras);
}

removeDuplicates("bookeeper Larry");
removeDuplicates("Home Alone, the movie");
