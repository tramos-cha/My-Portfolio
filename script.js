// For Animation
document.documentElement.classList.add("js");

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// In order menu items
document.querySelectorAll(".menu-list").forEach(function (list) {
  list.querySelectorAll("li").forEach(function (item, index) {
    item.style.setProperty("--i", index);
  });
});


const revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);   // isang beses lang
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal, .menu-list li").forEach(function (item) {
  revealObserver.observe(item);
});

// Active links for navigation
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

const navObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      navLinks.forEach(function (link) {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach(function (section) {
  navObserver.observe(section);
});

// 5. Copy email button
const copyBtn = document.getElementById("copyBtn");
const email = document.getElementById("email").textContent;

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(email)
    .then(function () {
      copyBtn.textContent = "Copied!";
    })
    .catch(function () {
      copyBtn.textContent = "Press Ctrl+C on the email";
    });

  setTimeout(function () {
    copyBtn.textContent = "Copy email";
  }, 2000);
});