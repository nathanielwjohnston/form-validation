function validateEmail() {
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

function validateCountry() {
  const input = document.querySelector("#country-input");
  const validationMessageDisplay = document.querySelector(
    "#country-validation-message",
  );

  input.setCustomValidity("");

  if (input.validity.patternMismatch) {
    input.setCustomValidity("Your input must only contain letters");
  } else if (input.validity.valueMissing) {
    input.setCustomValidity("Input missing");
  }

  validationMessageDisplay.textContent = input.validationMessage;
}

export { validateEmail, validateCountry };
