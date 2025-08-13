// PART 1: EVENT HANDLING

// Light/Dark Mode Toggle
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Counter Button
let count = 0;
document.getElementById('counterBtn').addEventListener('click', () => {
  count++;
  document.getElementById('count').textContent = count;
});

// PART 2: INTERACTIVE ELEMENTS

// Collapsible FAQ
document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    button.parentElement.classList.toggle('active');
  });
});

// PART 3: FORM VALIDATION

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop form from submitting

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Reset errors
  document.getElementById('nameError').textContent = "";
  document.getElementById('emailError').textContent = "";
  document.getElementById('passwordError').textContent = "";

  let isValid = true;

  // Name validation
  if (name.length < 3) {
    document.getElementById('nameError').textContent = "Name must be at least 3 characters.";
    isValid = false;
  }

  // Email validation (basic regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = "Enter a valid email.";
    isValid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById('passwordError').textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // If valid, show success
  if (isValid) {
    alert("Form submitted successfully!");
    this.reset();
  }
});
