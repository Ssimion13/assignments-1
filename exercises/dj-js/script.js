var box = document.getElementById("box");

box.addEventListener("mouseover", function(){box.style.backgroundColor = "blue"});
document.addEventListener("keydown", function(e){
    var x = e.keyCode;
    if (x == 66) {
        box.style.backgroundColor = "blue";
    }
});
box.addEventListener("mousedown", function(){box.style.backgroundColor = "red"});
document.addEventListener("keydown", function(e){
    var x = e.keyCode;
    if (x == 82) {
        box.style.backgroundColor = "red";
    }
});
box.addEventListener("mouseup", function(){box.style.backgroundColor = "yellow"});
document.addEventListener("keydown", function(e){
    var x = e.keyCode;
    if (x == 89) {
        box.style.backgroundColor = "yellow";
    }
});
box.addEventListener("dblclick", function(){box.style.backgroundColor = "green"});
document.addEventListener("keydown", function(e){
    var x = e.keyCode;
    if (x == 71) {
        box.style.backgroundColor = "green";
    }
});
box.addEventListener("wheel", function(){box.style.backgroundColor = "orange"});
document.addEventListener("keydown", function(e){
    var x = e.keyCode;
    if (x == 79) {
        box.style.backgroundColor = "orange";
    }
});
