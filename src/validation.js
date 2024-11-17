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

function validatePassword() {
  const input = document.querySelector("#password-input");
  const validationMessageDisplay = document.querySelector(
    "#password-validation-message",
  );

  input.setCustomValidity("");

  if (input.validity.valueMissing) {
    input.setCustomValidity("Input missing");
  } else if (!input.validity.valid) {
    const password = input.value;
    if (password.length < 8) {
      input.setCustomValidity("Your password is not long enough");
    }
  }

  validationMessageDisplay.textContent = input.validationMessage;
}

function validatePasswordConfirmation() {
  const input = document.querySelector("#password-confirmation-input");
  const validationMessageDisplay = document.querySelector(
    "#password-confirmation-validation-message",
  );

  input.setCustomValidity("");

  const password = document.querySelector("#password-input").value;
  const passwordConfirmation = input.value;
  if (input.validity.valueMissing) {
    input.setCustomValidity("Input missing");
  } else if (passwordConfirmation !== password) {
    input.setCustomValidity("These passwords do not match");
  }

  validationMessageDisplay.textContent = input.validationMessage;
}

export {
  validateEmail,
  validateCountry,
  validateZipCode,
  validatePassword,
  validatePasswordConfirmation,
};
