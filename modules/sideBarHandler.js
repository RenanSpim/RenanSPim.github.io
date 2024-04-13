const navbar = document.querySelector(".nav");
const menuContainer = document.querySelector(".menu-container");
const sideBar = document.querySelector(".side-bar");

sideBar.style.width = (window.innerWidth * 0.3 < 200)
    ? "calc(100vw - (var(--side-bar-padding) * 2))"
    : "calc(300px - (var(--side-bar-padding) * 2))";

function filhoTem(filho, elemento) {
    let curr = filho;

    while (curr !== null) {
        if (curr === elemento) return true;
        curr = curr.parentElement;
    }

    return false;
}

window.addEventListener("resize", () => {
    sideBar.style.width = (window.innerWidth * 0.3 < 200)
    ? "calc(100vw - (var(--side-bar-padding) * 2))"
    : "calc(300px - (var(--side-bar-padding) * 2))";
});

window.addEventListener("click", e => {
    if (filhoTem(e.target, menuContainer)) {
        menuContainer.classList.toggle("show");
        sideBar.classList.toggle("show");
    } else if (!filhoTem(e.target, sideBar) && !filhoTem(e.target, navbar)) {
        menuContainer.classList.remove("show");
        sideBar.classList.remove("show");
    }
});
