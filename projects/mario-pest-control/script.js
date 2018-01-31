document.marioForm.addEventListener("submit", function(e) {
    e.preventDefault();

    var num1 = document.marioForm.goombasCaught.value;
    var num2 = document.marioForm.bobombsCaught.value;
    var num3 = document.marioForm.cheepsCaught.value;
    var result = Number(num1 * 5) + Number(num2 * 7) + Number(num3 * 11)
    var htmlResult = document.getElementById("result");
    htmlResult.innerHTML = "Result: " + result + " coins";
})
