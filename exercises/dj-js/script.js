var box = document.getElementById("box");

box.addEventListener("mouseover", () => {box.style.backgroundColor = "blue"});
document.addEventListener("keydown", e => {
    var x = e.keyCode;
    if (x == 66) {
        box.style.backgroundColor = "blue";
    }
});
box.addEventListener("mousedown", () => {box.style.backgroundColor = "red"});
document.addEventListener("keydown", e => {
    var x = e.keyCode;
    if (x == 82) {
        box.style.backgroundColor = "red";
    }
});
box.addEventListener("mouseup", () => {box.style.backgroundColor = "yellow"});
document.addEventListener("keydown", e => {
    var x = e.keyCode;
    if (x == 89) {
        box.style.backgroundColor = "yellow";
    }
});
box.addEventListener("dblclick", () => {box.style.backgroundColor = "green"});
document.addEventListener("keydown", e => {
    var x = e.keyCode;
    if (x == 71) {
        box.style.backgroundColor = "green";
    }
});
box.addEventListener("wheel", () => {box.style.backgroundColor = "orange"});
document.addEventListener("keydown", e => {
    var x = e.keyCode;
    if (x == 79) {
        box.style.backgroundColor = "orange";
    }
});
