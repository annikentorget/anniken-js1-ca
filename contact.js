const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function validateForm(){
    event.preventDefault();

    // First name
    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameLength = firstName.value;

    // Last name
    const lastName = document.querySelector("#lastName");
    const lastNameError = document.querySelector("#lastNameError");
    const lastNameLength = lastName.value;

    // Email
    const email = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");
    const invalidEmailError = document.querySelector("#invalidEmailError");
    const emailLength = email.value;

    // Message
    const message = document.querySelector("#message");
    const messageError = document.querySelector("#messageError");
    const messageValue = message.value;

    if(checkLength(firstNameLength) === true){
        firstNameError.style.display ="none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkLength(lastNameLength) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if(checkMessageLength(messageValue)){
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    if(checkLength(emailLength)){
        emailError.style.display = "none";
        if (invalidEmail(emailLength) === true) {
            invalidEmailError.style.display = "none";
        } else {
            invalidEmailError.style.display = "block";
        }
    } else {
        emailError.style.display = "block";
        invalidEmailError.style.display = "none";
    }  
}
function invalidEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}

function checkLength(value){
    const trimmed = value.trim();

    if (trimmed.length > 0) {
        return true;
    } else {
        return false;
    }
}
function checkMessageLength(value) {
    const trimmedMessage = value.trim();

    if (trimmedMessage.length > 10) {
        return true;
    } else {
        return false;
    }
}