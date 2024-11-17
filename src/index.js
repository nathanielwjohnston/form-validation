import "./styles.css";
import * as validation from "./validation.js";

const email = document.querySelector("#email-input");
email.addEventListener("input", () => {
  validation.validateEmail();
});

const country = document.querySelector("#country-input");
country.addEventListener("input", () => {
  validation.validateCountry();
});

const zipCode = document.querySelector("#zip-code-input");
zipCode.addEventListener("input", () => {
  validation.validateZipCode();
});

const password = document.querySelector("#password-input");
password.addEventListener("input", () => {
  validation.validatePassword();
  validation.validatePasswordConfirmation();
});

const passwordConfirmation = document.querySelector(
  "#password-confirmation-input",
);
passwordConfirmation.addEventListener("input", () => {
  validation.validatePasswordConfirmation();
  validation.validatePassword();
});

const submitButton = document.querySelector("#form-submit-button");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const validations = [
    validation.validateEmail,
    validation.validateCountry,
    validation.validateZipCode,
    validation.validatePassword,
    validation.validatePasswordConfirmation,
  ];

  const validInputs = validations.filter((validation) => validation());
  if (validInputs.length === validations.length) {
    alert("High five!");
  } else {
    alert("Not there yet");
  }
});
