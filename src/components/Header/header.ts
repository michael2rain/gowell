const buttons = document.querySelectorAll("button");
const header = document.querySelector("Header");
const nav = document.querySelector("nav");
const menuItems = document.querySelector("#menuItems");
const miniCart = document.querySelector("#miniCart");
const icons = header?.querySelectorAll("svg");
const modalMenuButton = header?.querySelector("#modalMenuButton");
const modalCartButton = header?.querySelector("#modalCartButton");

let isOpen = false;
let isMiniCartOpen = false;
let isMenuItemsOpen = false;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switch (button.id) {

            case "menuButton": {

                if (!isOpen) {
                    toggleNavItems(button.id);
                    setTimeout(() => {
                        toggleNav();
                        toggleHammyIcon();
                    }, 100);
                } else {
                    setTimeout(() => {
                        toggleNavItems(button.id);
                        toggleMiniCart(button.id);
                    }, 100);
                    toggleNav();
                    toggleHammyIcon();


                };

                break;
            }

            case "cartButton": {

                if (!isOpen) {
                    toggleMiniCart(button.id);
                    setTimeout(() => {
                        toggleNav();
                        toggleHammyIcon();
                    }, 100);
                } else if (isOpen) {
                    setTimeout(() => {
                        toggleMiniCart(button.id);
                        toggleNavItems(button.id);
                    }, 100);
                };

                break;
            }

            case "modalCartButton": {
                toggleMiniCart(button.id);

                buttons.forEach((button) => {
                    if (button.id === "cartButton") {
                        button.focus();
                    }
                });

                break;
            };

            case "modalMenuButton": {
                toggleNavItems(button.id);

                break;
            };
        };
    });
});

const toggleNav = () => {
    if (!isOpen) {
        isOpen = true;
        nav?.classList.add("nav-in");
        nav?.classList.remove("nav-out");
        nav?.classList.remove("hidden");

    } else {
        isOpen = false;
        nav?.classList.remove("nav-in");
        nav?.classList.add("nav-out");
        setTimeout(() => {
            nav?.classList.add("hidden");
        }, 100);
    }
};

const toggleMiniCart = (button: string) => {
    if (button === "cartButton") {
        modalMenuButton?.classList.toggle("hidden");
        miniCart?.classList.toggle("nav-in");
        miniCart?.classList.toggle("hidden");

    } else if (button === "modalCartButton") {
        // Buttons
        modalMenuButton?.classList.toggle("hidden");
        modalCartButton?.classList.toggle("hidden");

        menuItems?.classList.toggle("nav-out");
        miniCart?.classList.toggle("nav-in");
        // Cart
        setTimeout(() => {
            miniCart?.classList.remove("hidden");
            menuItems?.classList.add("hidden");
            menuItems?.classList.remove("nav-in");
        }, 100);
    };

    isMiniCartOpen = true;
    isMenuItemsOpen = false;
    console.log("MenuItems: ", isMenuItemsOpen);
    console.log("MiniCart: ", isMiniCartOpen);
};

const toggleNavItems = (button: string) => {
    if (button === "menuButton") {
        menuItems?.classList.toggle("nav-in");
        menuItems?.classList.toggle("hidden");
        menuItems?.classList.remove("nav-out");
        setTimeout(() => {
            modalCartButton?.classList.toggle("hidden");
        }, 100);
    } else if (button === "modalMenuButton") {
        // Buttons
        modalCartButton?.classList.toggle("hidden");
        modalMenuButton?.classList.toggle("hidden");
        menuItems?.classList.remove("nav-out");

        // MenuItems
        menuItems?.classList.toggle("nav-in");
        miniCart?.classList.toggle("nav-out");
        setTimeout(() => {
            menuItems?.classList.remove("hidden");
            miniCart?.classList.add("hidden");
            miniCart?.classList.remove("nav-out");
        }, 100);
    } else if (button === "cartButton") {
        console.log("Boton de carrito presionado cuando el menu esta abierto");
        toggleNavItems("menuButton");
    };

    isMenuItemsOpen = true;
    isMiniCartOpen = false;
    console.log("MenuItems: ", isMenuItemsOpen);
    console.log("MiniCart: ", isMiniCartOpen);
};

const toggleHammyIcon = () => {
    icons?.forEach((icon) => {
        if (icon.id === "CloseIcon") {
            icon.classList.toggle("hidden");
        } else if (icon.id === "BarsIcon") {
            icon.classList.toggle("hidden");
        }
    });
};