document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validate form fields
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const gender = document.getElementById("gender").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const id = document.getElementById("id").value;

    if (!/^[A-Za-z]+$/.test(firstName)) {
      alert("Invalid first name. Only letters are allowed.");
      return;
    }

    if (!/^[A-Za-z]+$/.test(lastName)) {
      alert("Invalid last name. Only letters are allowed.");
      return;
    }

    if (gender === "") {
      alert("Please select a gender.");
      return;
    }

    if (!/^[0-9]{10}$/.test(phoneNumber)) {
      alert("Invalid phone number. Please enter a 10-digit number.");
      return;
    }

    if (!/[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com/.test(email)) {
      alert("Invalid email address. Only Gmail and Yahoo addresses are allowed.");
      return;
    }

    // You can add more custom validation for other fields if needed

    // If all validations passed, submit the form
    alert("Form submitted successfully!");
    contactForm.reset();
  });
});
