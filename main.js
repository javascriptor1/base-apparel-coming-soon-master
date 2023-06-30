"use strict";

const formControl = document.querySelector("#myForm");
const submitBtn = document.querySelector("#mobile-arrow-div");
const responseMessage = document.querySelector("#response-message");
const arrowError = document.querySelector("#arrow-error");

formControl.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputEmail = document.querySelector("#email-input").value;
  if (inputEmail == "" || inputEmail === null) {
    responseMessage.textContent = "Please enter a valid email";
    arrowError.classList.remove("hidden");
  }

  validateEmail(inputEmail);
});

function validateEmail(email_id) {
  const regex_pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex_pattern.test(email_id)) {
    responseMessage.textContent =
      "Thank you. You have subscribed successfully.";
      arrowError.classList.add("hidden");
  } else {
    responseMessage.textContent = "Please enter a valid email!";
    arrowError.classList.remove("hidden");
  }
}
