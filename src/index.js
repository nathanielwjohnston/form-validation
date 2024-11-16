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

const submitButton = document.querySelector("#form-submit-button");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  validation.validateEmail();
  validation.validateCountry();
  validation.validateZipCode();
});
