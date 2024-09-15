//email send
function SendMail() {
  var params = {
      from_name : document.getElementById("name").value,
      email_id : document.getElementById("email_id").value,
      dugaar_id : document.getElementById("dugaar_id").value,
      torol : document.getElementById("torol").value,
      class : document.getElementById("class").value,
      time : document.getElementById("time").value,
      dugnelt : document.getElementById("dugnelt").value,
      message : document.getElementById("message").value,
  }
  emailjs.send("service_7pihjz4", "template_j8qz4jg", params).then(function (res) {
      alert("Амжилтай илгээлээ ! " + res.status);
  })
} 


//pc menu heseg tarip

document.querySelector('.dropdown-btn').addEventListener('click', function() {
  if (window.innerWidth > 650) {
    const menu = document.querySelector('.dropdown-menu');
    menu.classList.toggle('show');
  }
});

window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach((dropdown) => {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
});



// Mobile Navigation

const mobileNav = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const mobileMenuItems = document.querySelectorAll(".mobile-nav .menu-items li");

menuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

mobileMenuItems.forEach((i) => {
  i.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});

// Desktop Navigation

const options = {
  threshold: 0.8,
};

const addActiveClass = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
      //   console.log(entry.target);
      let currentActive = document.querySelector(".desktop-nav a.active");

      if (currentActive) {
        currentActive.classList.remove("active");
      }

      let newActive = document.querySelector(
        `.desktop-nav a[href="#${entry.target.getAttribute("id")}"]`
      );

      newActive.classList.add("active");
    }
  });
};

const observer = new IntersectionObserver(addActiveClass, options);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  observer.observe(section);
});

const dynamicText = document.querySelector("h1 span");
const words = ["Welcome to", "HELP DESK", "Тавтай морил", "HELP DESK"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();
