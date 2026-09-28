// Highlight the menu link for the section you're currently viewing
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function updateActiveLink() {
    let current = "";

    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 150) {
            current = section.id;
        }
    });

    navLinks.forEach(function (link) {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );
    });
}

// Back to top button
const topButton = document.createElement("button");
topButton.id = "back-to-top";
topButton.textContent = "Back to top";

document.body.appendChild(topButton);

topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function toggleTopButton() {
    topButton.classList.toggle("show", window.scrollY > 400);
}

// Run on scroll and when the page loads
window.addEventListener("scroll", function () {
    updateActiveLink();
    toggleTopButton();
});

updateActiveLink();
toggleTopButton();
