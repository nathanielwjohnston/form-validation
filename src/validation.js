function validate_email() {
  const input = document.querySelector("#email-input");
  const validationMessageDisplay = document.querySelector(
    "#email-validation-message",
  );

  input.setCustomValidity("");

  if (!input.validity.valid) {
    input.setCustomValidity("Your input does not match that of an email");
  } else if (input.validity.valueMissing) {
    input.setCustomValidity("Input missing");
  }

  validationMessageDisplay.textContent = input.validationMessage;
}

export { validate_email };
