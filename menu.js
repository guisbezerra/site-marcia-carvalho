document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".menu-toggle").forEach((button) => {
    const header = button.closest(".site-header-content");
    const nav = header?.querySelector(".site-nav");
    if (!nav) return;

    button.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
      button.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
      button.innerHTML = isOpen ? "&times;" : "&#9776;";
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Abrir menu");
        button.innerHTML = "&#9776;";
      });
    });
  });
});
