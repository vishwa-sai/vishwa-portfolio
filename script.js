// ===============================
// Portfolio JavaScript
// Ch. Vishwa Sai Portfolio
// ===============================

// Scroll Reveal Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Active Navbar Link

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }

    });

});

// Navbar Shadow

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.4)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

// Typing Animation

const titles = [
    "Computer Science Student",
    "Aspiring Full-Stack Developer",
    "Technology Enthusiast",
    "Problem Solver"
];

let titleIndex = 0;
let charIndex = 0;

const titleElement =
    document.querySelector(".hero-text h3");

function typeText() {

    if (!titleElement) return;

    if (charIndex < titles[titleIndex].length) {

        titleElement.textContent +=
            titles[titleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 80);

    } else {

        setTimeout(deleteText, 1500);

    }

}

function deleteText() {

    if (charIndex > 0) {

        titleElement.textContent =
            titles[titleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteText, 40);

    } else {

        titleIndex++;

        if (titleIndex >= titles.length) {
            titleIndex = 0;
        }

        setTimeout(typeText, 300);

    }

}

window.addEventListener("load", () => {

    if (titleElement) {

        titleElement.textContent = "";
        typeText();

    }

});


// Statistics Counter Animation

const counters = document.querySelectorAll(".stat-card h2");

const speed = 100;

counters.forEach((counter) => {

    const animate = () => {

        const value =
            +counter.innerText.replace(/\D/g, "");

        let data = +counter.getAttribute("data-count");

        if (!data) {

            counter.setAttribute(
                "data-count",
                value
            );

            data = value;
        }

        const count =
            +counter.innerText.replace(/\D/g, "") || 0;

        const increment = Math.ceil(data / speed);

        if (count < data) {

            counter.innerText =
                count + increment;

            setTimeout(animate, 20);

        } else {

            counter.innerText =
                data +
                (counter.textContent.includes("+")
                    ? "+"
                    : "");

        }

    };

    animate();

});

// Console Signature

console.log(
    "%cPortfolio Developed by Ch. Vishwa Sai",
    "color:gold; font-size:16px; font-weight:bold;"
);
fetch("https://vishwa-portfolio-backend.onrender.com/profile")
    .then(response => response.json())
    .then(data => {

        const skillsContainer =
            document.getElementById("skills-container");

        skillsContainer.innerHTML = "";

        data.skills.forEach(skill => {

            const skillElement =
                document.createElement("span");

            skillElement.textContent = skill;

            skillsContainer.appendChild(skillElement);

        });

    })
    .catch(error => {
        console.log(error);
    });
    console.log("NEW SCRIPT LOADED");