// header code

const menuToggle = document.getElementById("menu-toggle");
const primaryNavigation = document.getElementById("primary-navigation");

menuToggle.addEventListener("click", () => {
    const isExpanded =
        menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute(
        "aria-label",
        isExpanded ? "Open navigation menu" : "Close navigation menu"
    );

    primaryNavigation.classList.toggle("is-open", !isExpanded);
});

// Close the menu after selecting a navigation link.
primaryNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        primaryNavigation.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

// Close the menu when the Escape key is pressed.
document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        primaryNavigation.classList.contains("is-open")
    ) {
        primaryNavigation.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.focus();
    }
});
