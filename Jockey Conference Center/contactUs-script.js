// Drop List (Subject) Validation (Only allows user to choose the available option, and not input text)
var subjectInput = document.getElementById("subject");
subjectInput.addEventListener("input", function (event) {
    var inputText = event.target.value;
    var options = Array.from(document.getElementById("subjects").options);

    if (!options.some(function (option) {
        return option.value === inputText;
    })) {
        subjectInput.value = "";
    }
});


// Footer Newsletter - Submit
function submitForm(event) {
    event.preventDefault();
    event.target.reset();
}

// Hamburger Menu script
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav__links");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navLinks.classList.toggle("active");
})

// Remove hamburger menu list after going through new page
document.querySelectorAll(".nav__links").forEach(n => n.
  addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navLinks.classList.remove("active");
  }))


// Validation Form
function validationForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phoneNumber").value;
    var message = document.getElementById("messageBox").value;
    var phoneMethod = document.getElementById("phoneMethod");
    var emailMethod = document.getElementById("emailMethod");

    // First name validation
    if (firstName.length < 3) {
        alert("Invalid first name. Please enter first name with at least 3 characters length");
        return false;
    }
    // Last name validation 
    else if (lastName.length < 3) {
        alert("Invalid last name. Please enter last name with at least 3 characters length");
        return false;
    }
    // email validation
    else if (!email.endsWith("@mail.com")) {
        alert("Invalid email address. Please enter a valid email ending with @mail.com");
        return false;
    }
    // phone number validation
    else if (phone.length < 10 || phone.length > 15) {
        alert("Invalid phone number. Please enter a phone number with 10 to 15 digits");
        return false;
    }
    // message validation
    else if (message.split(" ").length < 5) {
        alert("Invalid message. Please enter a message with at least 5 words");
        return false;
    }
    // Phone method and email method validation
    else if (!phoneMethod.checked && !emailMethod.checked) {
        alert("Please choose at least one contact method (Phone or Email)");
        return false;
    }

    // Successful submission
    alert("Form submitted successfully!");
    return true;
}