const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector("#themeToggle");
const toast = document.querySelector("#toast");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "☀" : "☾";
  localStorage.setItem("dayana-theme", document.body.classList.contains("light") ? "light" : "dark");
});

if (localStorage.getItem("dayana-theme") === "light") {
  document.body.classList.add("light");
  themeToggle.textContent = "☀";
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const sections = [...document.querySelectorAll("main section[id]")];
const navItems = [...document.querySelectorAll(".nav-links a")];

window.addEventListener("scroll", () => {
  const position = window.scrollY + 130;
  let current = sections[0]?.id;
  sections.forEach(section => {
    if (position >= section.offsetTop) current = section.id;
  });
  navItems.forEach(item => item.classList.toggle("active", item.getAttribute("href") === `#${current}`));
});

document.querySelectorAll(".project-link").forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showToast(`Agrega el enlace real de “${link.dataset.placeholder}” cuando lo publiques en GitHub.`);
  });
});

document.querySelector("#contactForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const message = document.querySelector("#message").value.trim();
  const status = document.querySelector("#formStatus");

  if (!name || !message) return;
  status.textContent = `Gracias, ${name}. El formulario está listo para conectar con un servicio de correo o backend.`;
  event.target.reset();
});

document.addEventListener("mousemove", (event) => {
  const glow = document.querySelector(".cursor-glow");
  if (glow) {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }
});

function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}
