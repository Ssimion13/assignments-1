document.contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    var fName = document.contactForm.fName.value;
    var lName = document.contactForm.lName.value;
    var email = document.contactForm.email.value;
    var phone = document.contactForm.phone.value;
    var howFound = document.contactForm.howFound.value;

    window.alert("Thank you, " + fName + " " + lName + ". " + "Someone will contact you at " + phone + "right away.");
});
