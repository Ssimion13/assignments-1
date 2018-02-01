document.contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    var fName = document.contactForm.fName.value;
    var lName = document.contactForm.lName.value;
    var email = document.contactForm.email.value;
    var phone = document.contactForm.phone.value;
    var prefContact = document.contactForm.preferedContact.value;
    var howFound = document.contactForm.howFound.value;

    if (!fName || !lName || !email || !phone || !prefContact || !howFound) {
        if (!fName) {
            window.alert("Please complete the form. All fields are required.");
            document.contactForm.fName.focus();
        } else if (!lName) {
            window.alert("Please complete the form. All fields are required.");
            document.contactForm.lName.focus();
        } else if (!email) {
            window.alert("Please complete the form. All fields are required.");
            document.contactForm.email.focus();
        } else if (!phone) {
            window.alert("Please complete the form. All fields are required.");
            document.contactForm.phone.focus();
        } else if (!prefContact) {
            window.alert("Please complete the form. All fields are required.");
            document.contactForm.preferedContact.focus();
        } else if (!howFound) {
            window.alert("Please complete the form. All fields are required.");
            document.contactForm.howFound.focus();
        }
        
    } else if (prefContact === "telephone") {
        window.alert("Thank you, " + fName + " " + lName + ". " + "A customer service representative will contact you at " + phone + " right away.");
    } else {
        window.alert("Thank you, " + fName + " " + lName + ". " + "A customer service representative will contact you at " + email + " right away.");
    }

});
