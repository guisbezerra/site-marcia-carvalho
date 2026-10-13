document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".menu-toggle").forEach((button) => {
    const header = button.closest(".site-header-content");
    const nav = header && header.querySelector(".site-nav");
    if (!header || !nav) return;

    const closeMenu = () => {
      header.classList.remove("menu-open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Abrir menu");
    };

    button.addEventListener("click", () => {
      const isOpen = header.classList.toggle("menu-open");
      button.setAttribute("aria-expanded", String(isOpen));
      button.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) closeMenu();
    });
  });
});
