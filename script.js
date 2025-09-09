// Event Handling Example
let helloBtn = document.getElementById("helloBtn");
let helloMsg = document.getElementById("helloMsg");

helloBtn.addEventListener("click", function() {
  // toggle message
  if (helloMsg.style.display === "none") {
    helloMsg.style.display = "block";
  } else {
    helloMsg.style.display = "none";
  }
});

// Feature 1: Theme toggle
let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark");
});

// Feature 2: Counter
let count = 0;
let countDisplay = document.getElementById("count");

document.getElementById("plusBtn").addEventListener("click", function() {
  count++;
  countDisplay.textContent = count;
});

document.getElementById("minusBtn").addEventListener("click", function() {
  count--;
  countDisplay.textContent = count;
});

// Form Validation
let form = document.getElementById("signupForm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop page reload
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let msg = "";

  if (name === "" || email === "" || password === "") {
    msg = "All fields are required";
  } else if (!email.includes("@") || !email.includes(".")) {
    msg = "Enter a valid email";
  } else if (password.length < 6) {
    msg = "Password must be at least 6 characters";
  } else {
    msg = "Form submitted successfully!";
  }

  document.getElementById("formMsg").textContent = msg;
});
