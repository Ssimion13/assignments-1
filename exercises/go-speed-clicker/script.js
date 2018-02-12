var counter = localStorage.count || 0;
document.getElementById('display').innerText = localStorage.count || '';

var someFunc = function(e) {
    counter++;
    localStorage.count = counter;
    document.getElementById('display').innerText = localStorage.count;
};

document.getElementById("button").addEventListener('click', someFunc);

var myVar;

function stopFunc() {
    document.getElementById("button").removeEventListener('click', someFunc);
}

function myFunction() {
    myVar = setTimeout(stopFunc, 10000);
}

myFunction();

var x = document.getElementById("txt");

var timeleft = 10;
    var downloadTimer = setInterval(function(){
    timeleft--;
    x.innerText = `${timeleft} seconds`;
    if(timeleft <= 0) {
        x.innerText = "Time's Up!"
        clearInterval(downloadTimer);
    }
    },1000);
