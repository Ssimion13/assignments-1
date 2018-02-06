var heroes = ["Superman", "SpiderMan", "Wonder Woman", "Ironman", "Black Widow", "Thor"];

for (var i = 0; i < heroes.length; i++) {
    document.getElementById("myList").innerHTML += "<li>" + heroes[i] + "</li>";
}
