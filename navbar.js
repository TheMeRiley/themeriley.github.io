document.addEventListener("DOMContentLoaded", () => {

    fetch("navbar.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

            setActiveLink();
        });

});

function setActiveLink() {

    const links = document.querySelectorAll("#navbar a");
    const path = window.location.pathname;

    links.forEach(link => {

        const href = link.getAttribute("href");

        if (href === "/index.html" && path.endsWith("index.html")) {
            link.classList.add("active");
        }

        else if (href.includes("projects") && path.includes("projects")) {
            link.classList.add("active");
        }

        else if (href.includes("devlog") && path.includes("devlog")) {
            link.classList.add("active");
        }

        else if (href.includes("about") && path.includes("about")) {
            link.classList.add("active");
        }

        else if (href.includes("downloads") && path.includes("downloads")) {
            link.classList.add("active");
        }
        
        else if (href.includes("contact") && path.includes("contact")) {
            link.classList.add("active");
        }
    });
}