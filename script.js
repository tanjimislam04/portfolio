// Skills Category Tab Functionality
const categoryTabs = document.querySelectorAll(".category-tab");
const skillsCategories = document.querySelectorAll(".skills-category");

categoryTabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const category = this.getAttribute("data-category");

    // Remove active class from all tabs and categories
    categoryTabs.forEach((t) => t.classList.remove("active"));
    skillsCategories.forEach((cat) => cat.classList.remove("active"));

    // Add active class to clicked tab and corresponding category
    this.classList.add("active");
    document
      .querySelector(`.skills-category[data-category="${category}"]`)
      .classList.add("active");
  });
});

// Contact Form
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  formStatus.innerText = "Sending your message...";
  formStatus.style.color = "#D04870";

  const formData = new FormData(contactForm);

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      formStatus.innerText =
        "Message sent successfully! I'll get back to you soon.";
      formStatus.style.color = "#2e7d32";
      contactForm.reset();
    } else {
      formStatus.innerText = "Oops! Something went wrong.";
      formStatus.style.color = "#d32f2f";
    }
  } catch (error) {
    formStatus.innerText = "Network error. Please try again.";
    formStatus.style.color = "#d32f2f";
  }
});
