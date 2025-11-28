const bars = document.querySelectorAll(".progress");

function showSkills() {
    bars.forEach(bar => {
        bar.style.width = bar.getAttribute("data-width");
    });
}

window.addEventListener("scroll", () => {
    const skills = document.querySelector(".skills");
    const position = skills.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
        showSkills();
    }
});

document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        window.location.href = card.getAttribute("data-link");
    });
});

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

ctx.fillStyle = "orange";
ctx.fillRect(20, 20, 150, 80);

ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.fillText("Hello Aastha", 35, 65);

let images = ["image1.jpeg", "image2.webp", "image3.avif"];
let i = 0;

function next() {
    i = (i + 1) % images.length;
    document.getElementById("slideImg").src = images[i];
}

function prev() {
    i = (i - 1 + images.length) % images.length;
    document.getElementById("slideImg").src = images[i];
}

document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        document.getElementById("formMsg").textContent = "All fields are required!";
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("message", message);

    document.getElementById("formMsg").textContent = "Message stored successfully!";
});

document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("dark");
};

let topBtn = document.getElementById("topBtn");

window.onscroll = () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
