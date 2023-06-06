function toggle_hamb() {
    let x = document.getElementById("navbar_menus");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

function toggle_attr() {
    let x = document.getElementById("navbar_menus");
    if (screen.matches) {
        if (x.style.display !== "flex") {
            x.style.display = "flex";
        }
    } else {
        if (x.style.display === "none") {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
        }
    }
}

var screen = window.matchMedia("(min-width: 1024px)")
screen.addListener(toggle_attr)