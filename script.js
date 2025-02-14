// Dropdown Menu
console.log("message");
documentadil.addEventListener("DOMContentLoaded", function () {
  const dropdownbuttons = document.querySelectorAll(".dropbtn");
  const dropdownContents = document.querySelectorAll(".dropdown-content");

  dropdownbuttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const dropdownContent = button.nextSibling.nextSibling;
      dropdownContent.classList.toggle("show");
    });
  });

  // Add event listener to the document to close the dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.matches(".dropbtn")) {
      dropdownContents.forEach((content) => {
        if (content.classList.contains("show")) {
          content.classList.remove("show");
        }
      });
    }
  });
});

// Contact Form Validation
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    const form = event.target;
    const name = form["name"].value;
    const email = form["email"].value;
    const message = form["message"].value;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      event.preventDefault();
    }

    if (!validateEmail(email)) {
      alert("Invalid email address.");
      event.preventDefault();
    }

    function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(email);
    }
    console.log(message);
  });
