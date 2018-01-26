let removeA = function(str) {
  var lowerStr = str.toLowerCase();
  var newStr = "";

  for (var i = 0; i < str.length; i++) {
      if (lowerStr[i] !== "a") {
          newStr += lowerStr[i];
      }
  }
  return newStr;
}

console.log(removeA("CaliforniA"));
