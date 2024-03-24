const buttons = document.querySelectorAll("button");
const header = document.querySelector("Header");
const nav = document.querySelector("nav");
const menuItems = document.querySelector("#menuItems");
const miniCart = document.querySelector("#miniCart");

const goToMenuButton = header?.querySelector("#goToMenuButton");
const cartMenuBtn = header?.querySelector("#cartMenuButton");

let isOpen = false;
let openWith = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switch (button.id) {

            case "menuButton": {
                const icons = button.querySelectorAll("svg");
                icons.forEach((icon) => {
                    icon.classList.toggle("hidden");
                });
                toggleNav("menu");

                openWith = "menu";

                break;
            }

            case "cartButton": {
                menuItems?.classList.toggle("hidden")
                miniCart?.classList.toggle("hidden")

                if (!isOpen) {
                    openWith = "cart";

                    toggleNav("cart");
                    const icons = header?.querySelectorAll("svg");
                    icons?.forEach((icon) => {
                        if (icon.id === "CloseIcon") {
                            icon.classList.toggle("hidden");
                            console.log(icon.id);
                        } else if (icon.id === "BarsIcon") {
                            icon.classList.toggle("hidden");
                            console.log(icon.id);
                        }
                    });
                } else {
                    if (openWith === "menu") {
                        toggleMiniCart();
                        openWith = "cart";
                    } else if (openWith === "cart") {
                        toggleNav("cart");
                    }
                };

                cartMenuBtn?.classList.toggle("hidden");
                goToMenuButton?.classList.toggle("hidden");
                goToMenuButton?.classList.add("flex");

                break;
            }

            case "cartMenuButton": {
                toggleMiniCart();

                button.classList.toggle("hidden");
                goToMenuButton?.classList.toggle("hidden");
                goToMenuButton?.classList.add("flex");

                break;
            };

            case "goToMenuButton": {
                toggleNavItems();

                button.classList.toggle("hidden");
                cartMenuBtn?.classList.toggle("hidden");

                break;
            };
        };
    });
});

const toggleNav = (option: string) => {
    if (!isOpen) {
        isOpen = true;
        nav?.classList.add("nav-in");
        nav?.classList.remove("nav-out");
        nav?.classList.remove("hidden");

        if (option === "cart") {
            menuItems?.classList.add("hidden");
            miniCart?.classList.remove("hidden");
        } else if (option === "menu") {
            menuItems?.classList.remove("hidden");
            miniCart?.classList.add("hidden");
        }

    } else {
        isOpen = false;
        nav?.classList.remove("nav-in");
        nav?.classList.add("nav-out");
        setTimeout(() => {
            nav?.classList.add("hidden");
        }, 100);
    }
};

const toggleMiniCart = () => {
    menuItems?.classList.toggle("nav-out");
    miniCart?.classList.toggle("nav-in");

    setTimeout(() => {
        miniCart?.classList.remove("hidden");
        menuItems?.classList.add("hidden");
        menuItems?.classList.remove("nav-in");
    }, 100);
};

const toggleNavItems = () => {
    miniCart?.classList.toggle("nav-in");
    miniCart?.classList.toggle("nav-out");
    menuItems?.classList.toggle("nav-out");
    menuItems?.classList.toggle("nav-in");

    setTimeout(() => {
        menuItems?.classList.remove("hidden");
        miniCart?.classList.add("hidden");
        miniCart?.classList.remove("nav-out");
    }, 100);
};