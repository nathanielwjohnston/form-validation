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
});

const passwordConfirmation = document.querySelector(
  "#password-confirmation-input",
);
passwordConfirmation.addEventListener("input", () => {
  validation.validatePasswordConfirmation();
});

const submitButton = document.querySelector("#form-submit-button");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  validation.validateEmail();
  validation.validateCountry();
  validation.validateZipCode();
  validation.validatePassword();
  validation.validatePasswordConfirmation();
});
