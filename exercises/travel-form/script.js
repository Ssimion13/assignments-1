document.info.addEventListener("submit", function(e) {
    e.preventDefault();

    var fName = document.info.fName.value;
    var lName = document.info.lName.value;
    var age = document.info.age.value;
    var gender = document.info.gender.value;
    var location = document.info.destination.value;

    var dietChoicesArr = [];
    for (var i = 0; i < document.info.diets.length; i++) {
        if (document.info.diets[i].checked) {
            dietChoicesArr.push(document.info.diets[i].value);
        }
    }
    var dietStr = dietChoicesArr.join(", ");

    window.alert("First Name: " + fName + "\nLast Name: " + lName + "\nAge: " + age + "\nGender: " + gender + "\nLocation: " + location + "\nDietary Restrictions: " + dietStr);
    // console.log(infoArr);
    // console.log(dietChoicesArr);
});
