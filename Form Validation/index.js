const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// show error
function setError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show success
function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// validate email
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop form from submitting

  // Name validation
  if (nameInput.value.trim() === "") {
    setError(nameInput, "Name is required");
  } else if (nameInput.value.length < 3) {
    setError(nameInput, "Name must be at least 3 characters");
  } else {
    setSuccess(nameInput);
  }

  // Email validation
  if (emailInput.value.trim() === "") {
    setError(emailInput, "Email is required");
  } else if (!isValidEmail(emailInput.value)) {
    setError(emailInput, "Email is not valid");
  } else {
    setSuccess(emailInput);
  }

  // Password validation
  if (passwordInput.value.trim() === "") {
    setError(passwordInput, "Password is required");
  } else if (passwordInput.value.length < 6) {
    setError(passwordInput, "Password must be at least 6 characters");
  } else {
    setSuccess(passwordInput);
  }
});
