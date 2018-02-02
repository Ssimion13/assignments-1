var mouse = {x: 0, y: 0};

document.addEventListener("mousemove", function(event) {

    if(event.y > 300){
        mouse.y = 300;
        console.log(mouse.y);
    } else {
        mouse.y = event.y;
        console.log(mouse.y);
    }

    if (event.y < 100) {
        mouse.y = 100;
    } else {
        mouse.y = event.y;
    }

    if(event.x > 300){
        mouse.x = 300;
    } else {
        mouse.x = event.x;
    }

    if (event.x < 100){
        mouse.x = 100;
    } else {
        mouse.x = event.x;
    }

    document.getElementById("number").innerHTML = "x: " + mouse.x + "<br>y: " + mouse.y;

});
