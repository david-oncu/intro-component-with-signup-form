const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const pass = document.getElementById("password");



const nameText = document.getElementById("error-name-text");
const nameIcon = document.getElementById("error-name-icon");

const lastText = document.getElementById("error-last-text");
const lastIcon = document.getElementById("error-last-icon");

const emailText = document.getElementById("error-email-text");
const emailIcon = document.getElementById("error-email-icon");

const passText = document.getElementById("error-pass-text");
const passIcon = document.getElementById("error-pass-icon");



form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();

})

function checkInputs() {

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();


    if (firstNameValue === ''){
            errorName();

        } else {

            successName();}

    
    if (lastNameValue === ''){
            errorLast();

        } else {

            successLast();}

    

        if (emailValue === '') {
            emailText.style.display = "block";
            emailIcon.style.visibility = "visible";
            email.style.outline = "2px solid hsl(0, 100%, 74%)";
        } else if (email.validity.typeMismatch) {
            emailText.style.display = "block";
            emailIcon.style.visibility = "visible";
            email.style.outline = "2px solid hsl(0, 100%, 74%)";
        
        } else {
            emailText.style.display = "none";
            emailIcon.style.visibility = "hidden";
            email.style.outline = "2px solid hsl(154, 59%, 51%)";

        }



    if (passValue === ''){
            errorPass();

        } else {

            successPass();}

// NAME

function errorName(input){
    nameText.style.display = "block";
    nameIcon.style.visibility = "visible";
    firstName.style.outline = "2px solid hsl(0, 100%, 74%)";
    
}

function successName(input){
    nameText.style.display = "none";
    nameIcon.style.visibility = "hidden";
    firstName.style.outline = "2px solid hsl(154, 59%, 51%)";
}

// LAST

function errorLast(input){
    lastText.style.display = "block";
    lastIcon.style.visibility = "visible";
    lastName.style.outline = "2px solid hsl(0, 100%, 74%)";
    
}

function successLast(input){
    lastText.style.display = "none";
    lastIcon.style.visibility = "hidden";
    lastName.style.outline = "2px solid hsl(154, 59%, 51%)";
}

// EMAIL

function errorEmail(input){
    emailText.style.display = "block";
    emailIcon.style.visibility = "visible";
    email.style.outline = "2px solid hsl(0, 100%, 74%)";
    
}

function successEmail(input){
    emailText.style.display = "none";
    emailIcon.style.visibility = "hidden";
    email.style.outline = "2px solid hsl(154, 59%, 51%)";
}

// PASSWORD

function errorPass(input){
    passText.style.display = "block";
    passIcon.style.visibility = "visible";
    pass.style.outline = "2px solid hsl(0, 100%, 74%)";
    
}

function successPass(input){
    passText.style.display = "none";
    passIcon.style.visibility = "hidden";
    pass.style.outline = "2px solid hsl(154, 59%, 51%)";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

}



