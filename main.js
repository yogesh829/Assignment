const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
	navLinks.classList.toggle("open");

	const isOpen = navLinks.classList.contains("open");
	menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
	navLinks.classList.remove("open");
	menuBtnIcon.setAttribute("class", "ri-menu-line");
});

lightbox.option({
	resizeDuration: 200,
	wrapAround: true,
	disableScrolling: true,
});

const scrollRevealOption = {
	distance: "50px",
	origin: "bottom",
	duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
	...scrollRevealOption,
	origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
	...scrollRevealOption,
	delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
	...scrollRevealOption,
	delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
	...scrollRevealOption,
	delay: 1500,
});
ScrollReveal().reveal(".header__btns", {
	...scrollRevealOption,
	delay: 2000,
});
ScrollReveal().reveal(".heading", {
	...scrollRevealOption,
	origin: "top",
	delay: 500,
});
ScrollReveal().reveal(".gallery__container", {
	...scrollRevealOption,
	origin: "top",
	delay: 1000,
});
ScrollReveal().reveal(".contactForm form", {
	...scrollRevealOption,
	origin: "top",
	delay: 1000,
});
ScrollReveal().reveal(".map-container", {
	...scrollRevealOption,
	origin: "top",
	delay: 1500,
});
ScrollReveal().reveal(".admission__content", {
	...scrollRevealOption,
	origin: "left",
	delay: 1000,
});
