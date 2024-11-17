function validateEmail() {
  let valid = true;
  const input = document.querySelector("#email-input");
  const validationMessageDisplay = document.querySelector(
    "#email-validation-message",
  );

  input.setCustomValidity("");

  if (!input.validity.valid) {
    input.setCustomValidity("Your input does not match that of an email");
    valid = false;
  } else if (input.validity.valueMissing) {
    input.setCustomValidity("Input missing");
    valid = false;
  }

  validationMessageDisplay.textContent = input.validationMessage;
  return valid;
}

function validateCountry() {
  let valid = true;
  const input = document.querySelector("#country-input");
  const validationMessageDisplay = document.querySelector(
    "#country-validation-message",
  );

  input.setCustomValidity("");

  if (input.validity.patternMismatch) {
    input.setCustomValidity("Your input must only contain letters");
    valid = false;
  } else if (input.validity.valueMissing) {
    input.setCustomValidity("Input missing");
    valid = false;
  }

  validationMessageDisplay.textContent = input.validationMessage;
  return valid;
}

function validateZipCode() {
  let valid = true;
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
    valid = false;
  } else if (input.validity.valueMissing) {
    input.setCustomValidity("Input missing");
    valid = false;
  }

  validationMessageDisplay.textContent = input.validationMessage;
  return valid;
}

function validatePassword() {
  let valid = true;
  const input = document.querySelector("#password-input");
  const validationMessageDisplay = document.querySelector(
    "#password-validation-message",
  );

  input.setCustomValidity("");

  if (input.validity.valueMissing) {
    input.setCustomValidity("Input missing");
    valid = false;
  } else if (!input.validity.valid) {
    const password = input.value;
    if (password.length < 8) {
      input.setCustomValidity("Your password is not long enough");
    }
    valid = false;
  }

  validationMessageDisplay.textContent = input.validationMessage;
  return valid;
}

function validatePasswordConfirmation() {
  let valid = true;
  const input = document.querySelector("#password-confirmation-input");
  const validationMessageDisplay = document.querySelector(
    "#password-confirmation-validation-message",
  );

  input.setCustomValidity("");

  const password = document.querySelector("#password-input").value;
  const passwordConfirmation = input.value;
  if (input.validity.valueMissing) {
    input.setCustomValidity("Input missing");
    valid = false;
  } else if (passwordConfirmation !== password) {
    input.setCustomValidity("These passwords do not match");
    valid = false;
  }

  validationMessageDisplay.textContent = input.validationMessage;
  return valid;
}

export {
  validateEmail,
  validateCountry,
  validateZipCode,
  validatePassword,
  validatePasswordConfirmation,
};
