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

function validateZipCode() {
  const input = document.querySelector("#zip-code-input");
  const validationMessageDisplay = document.querySelector(
    "#zip-code-validation-message",
  );

  input.setCustomValidity("");

  if (input.validity.patternMismatch) {
    const code = input.value;
    if (code.length < 5) {
      input.setCustomValidity("Your zip code has too few numbers");
    }
  } else if (input.validity.valueMissing) {
    input.setCustomValidity("Input missing");
  }

  validationMessageDisplay.textContent = input.validationMessage;
}

export { validateEmail, validateCountry, validateZipCode };
