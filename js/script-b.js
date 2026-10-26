 const menuButton = document.getElementById("menu-button");
    const sideMenu = document.getElementById("side-menu");
    const menuOverlay = document.getElementById("menu-overlay");
    const menuLinks = sideMenu.querySelectorAll("a");

    function openMenu() {
        sideMenu.classList.add("is-open");
        menuOverlay.classList.add("is-open");
        menuButton.setAttribute("aria-expanded", "true");
        menuButton.setAttribute("aria-label", "メニューを閉じる");
        sideMenu.setAttribute("aria-hidden", "false");
        document.body.classList.add("menu-open");
    }

    function closeMenu() {
        sideMenu.classList.remove("is-open");
        menuOverlay.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "メニューを開く");
        sideMenu.setAttribute("aria-hidden", "true");
        document.body.classList.remove("menu-open");
    }

    menuButton.addEventListener("click", function () {
        if (menuButton.getAttribute("aria-expanded") === "true") {
            closeMenu();
        } else {
            openMenu();
        }
    });

    menuOverlay.addEventListener("click", closeMenu);

    menuLinks.forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });