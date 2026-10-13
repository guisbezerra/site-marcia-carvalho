document.addEventListener("DOMContentLoaded", () => {
  const selectors = [
    ".site-header",
    ".hero-content",
    ".hero-image",
    ".services-preview",
    ".service-card",
    ".about-hero",
    ".about-approach",
    ".services-grid",
    ".contact-intro",
    ".contact-content",
    ".contact-option",
    ".psychotherapy-copy",
    ".psychotherapy-copy > *",
    ".psychotherapy-image",
    ".psychotherapy-actions .button",
    ".site-footer",
  ];

  const elements = document.querySelectorAll(selectors.join(", "));

  if (!elements.length) return;

  // Ativa as animações somente quando o JavaScript funciona.
  document.documentElement.classList.add("animations-enabled");

  elements.forEach((element) => {
    element.classList.add("js-reveal");
  });

  // Se o navegador não suportar o recurso, mostra tudo normalmente.
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -20px 0px",
    }
  );

  elements.forEach((element) => observer.observe(element));
});
