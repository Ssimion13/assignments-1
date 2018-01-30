document.addForm.addEventListener("submit", function(e){
    e.preventDefault();
    var num1 = document.getElementById("addNum1");
    var num2 = document.getElementById("addNum2");
    var result = document.getElementById("addResult");
    result.innerHTML = "Result: " + (Number(num1.value) + Number(num2.value));
});

document.subForm.addEventListener("submit", function(e){
    e.preventDefault();
    var num1 = document.getElementById("subNum1");
    var num2 = document.getElementById("subNum2");
    var result = document.getElementById("subResult");
    result.innerHTML = "Result: " + (Number(num1.value) - Number(num2.value));
});

document.multForm.addEventListener("submit", function(e){
    e.preventDefault();
    var num1 = document.getElementById("multNum1");
    var num2 = document.getElementById("multNum2");
    var result = document.getElementById("multResult");
    result.innerHTML = "Result: " + Number(num1.value) * Number(num2.value);
});
