

// 1. ====================== Typing Text Animation Start ==============================

function startTypingAnimation(selector, strings) {
  new Typed(selector, {
    strings: strings,
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
}
startTypingAnimation(".typing-2", ["Student", "Web Developer", "Programmer"]);
startTypingAnimation(".typing", ["Student", "Web Developer", "Programmer"]);

// ====================== Typing Text Animation END ==============================



// 2. ========================== ScrollSpy Start ==========================

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".scrollspy");
  const navLinks = document.querySelectorAll("#nav-links-all a");
  const observerOptions = {
    threshold: [0.25, 0.5, 0.75], // Using multiple thresholds
    rootMargin: "0px 0px -25% 0px",
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(
      //   `Section ${entry.target.id} is ${
      //     entry.isIntersecting ? "" : "not "
      //   }intersecting`
      // );
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === entry.target.id) {
            link.classList.add("active");
            // console.log(
            //   `Active class added to link: ${link.getAttribute("href")}`
            // );
          }
        });
      }
    });
  }, observerOptions);
  sections.forEach((section) => {
    observer.observe(section);
    // console.log(`Observer is observing section: ${section.id}`);
  });
});

// ========================== ScrollSpy END ==========================


// 3. ======================== Contact Section Start===================

function appScript() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz9R81FxlG-ZtVzllIdXvR9v3Jp4vBOeENBBGHMMsKqIoKHRbBTCuch0GAXJnulbYYyyw/exec";
  const form = document.forms["contact"];

  fetch(scriptURL, { method: "POST", body: new FormData(form) }).catch(
    (error) => console.error("Error!", error.message)
  );
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regular expression for email by Eqbal Ahamad sir
  return emailPattern.test(email);
}

function thank(event) {
  event.preventDefault(); // Prevent form submission until validation is complete

  let name = document.querySelector("#name-id");
  let email = document.querySelector("#email-id");
  let sub = document.querySelector("#subject-id");
  let msg = document.querySelector("#msg-id");
  let p = document.querySelector("#msg-sent");

  if (
    name.value === "" ||
    email.value === "" ||
    sub.value === "" ||
    msg.value === ""
  ) {
    p.innerHTML = "Please fill all the fields!!";
    setTimeout(() => {
      p.innerHTML = "";
    }, 3000);
  } else if (!validateEmail(email.value)) {
    p.innerHTML = "Please enter a valid email address!";
    setTimeout(() => {
      p.innerHTML = "";
    }, 3000);
  } else {
    appScript(); // Submit the form after validation

    name.value = "";
    email.value = "";
    sub.value = "";
    msg.value = "";
    p.innerHTML = "Thank you! Message sent successfully.";
    setTimeout(() => {
      p.innerHTML = "";
    }, 3000);
  }
}

// ======================== Contact Section END===================
