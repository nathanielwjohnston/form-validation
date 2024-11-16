import "./styles.css";
import * as validation from "./validation.js";

const email = document.querySelector("#email-input");

email.addEventListener("input", () => {
  validation.validate_email();
});

const submitButton = document.querySelector("#form-submit-button");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  validation.validate_email();
});
