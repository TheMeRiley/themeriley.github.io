document.addEventListener("DOMContentLoaded", () => {

    fetch("navbar.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

            // AFTER navbar loads, run active highlighting
            setActiveLink();
        });

});

function setActiveLink() {

    const links = document.querySelectorAll("#navbar a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

}