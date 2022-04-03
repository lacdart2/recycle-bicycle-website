// hamburger menu
let header = document.querySelector("header");
let menu = document.querySelector(".nav-list");
let openMenu = document.querySelector(".open");
let closeMenu = document.querySelector(".close");

// open hamburger menu
openMenu.addEventListener("click", function () {
    menu.classList.toggle("active");
    openMenu.style.visibility = "hidden";
});

// close hamburger menu
closeMenu.addEventListener("click", function () {
    menu.classList.remove("active");
    openMenu.style.visibility = "visible";
});








/*  form validation js*/

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const emailRecovery = document.getElementById("emailRecovery");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    // trim for white space
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    /*    const emailRecoveryValue = emailRecovery.value.trim(); */

    if (usernameValue === "") {
        setErrorFor(username, "you must enter Username");
    } else {
        setSuccessFor(username);
    }
    if (emailValue === "") {
        setErrorFor(email, "you must enter your email");
    } else if (!correctEmail(emailValue)) {
        setErrorFor(email, "email is not valid");
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "you must enter password");
    } else {
        setSuccessFor(password);
    }

    if (password2Value === "") {
        setErrorFor(password2, "you must confirm your password");
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, "Passwords does not match");
    } else {
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function correctEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

/* login , creating account, recovery js*/

const emailOld = document.getElementById("emailExistent");
const passwordOld = document.getElementById("passwordExistent");
const formOld = document.getElementById("formLogin");

formOld.addEventListener("submitOld", (e) => {
    let errors = [];
    if (emailOld.value === "" || emailOld.value == null) {
        errors.push("email is required");
    }
    e.preventDefault();
});

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#loginForm");
    const createAccountForm = document.querySelector("#createAccount");
    const passwordRecovery = document.querySelector("#pw-recovery");
    const passwordRecovery2 = document.querySelector("#pw-recovery2");

    document.querySelector("#linkLogin").addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.remove("hidden-form");
        createAccountForm.classList.add("hidden-form");
    });
    document
        .querySelector("#linkCreateAccount")
        .addEventListener("click", (e) => {
            e.preventDefault();

            createAccountForm.classList.remove("hidden-form");
            loginForm.classList.add("hidden-form");
        });
    document
        .querySelector("#linkPasswordRecovery")
        .addEventListener("click", (e) => {
            e.preventDefault();
            passwordRecovery.classList.remove("hidden-recovery");
            loginForm.classList.add("hidden-form");
        });
    document
        .querySelector("#linkPasswordRecovery2")
        .addEventListener("click", (e) => {
            e.preventDefault();
            passwordRecovery2.classList.remove("hidden-recovery2");
            passwordRecovery.classList.add("hidden-recovery");
        });
    document.querySelector("#backToLogin").addEventListener("click", (e) => {
        e.preventDefault();
        passwordRecovery2.classList.add("hidden-recovery2");
        loginForm.classList.remove("hidden-form");
    });
});