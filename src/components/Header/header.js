const buttons = document.querySelectorAll("button");
const header = document.querySelector("Header");
const nav = document.querySelector("nav");

let isOpen = false;
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "cart") {
            console.log("cart");
        } else if (button.id === "menuButton") {
            const icons = button.querySelectorAll("svg");
            icons.forEach((icon) => {
                icon.classList.toggle("hidden");
            });

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
        }
    });
});