const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.addEventListener('click', () => {

        const answer = question.nextElementSibling;
        const isOpen = answer.style.maxHeight;

        // Fecha todos
        document.querySelectorAll('.faq-answer').forEach(item => {
            item.style.maxHeight = null;
        });

        document.querySelectorAll('.faq-question').forEach(item => {
            item.classList.remove('active');
        });

        // Abre o clicado
        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            question.classList.add('active');
        }
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-Links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

document.querySelectorAll('.nav-Links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});


document.addEventListener('DOMContentLoaded', () => {

    ScrollReveal().reveal('#hero-stats li', {
        origin: 'bottom',
        duration: 1000,
        distance: '20%',
        interval: 700
    });

    ScrollReveal().reveal('#servicos-grids article', {
        origin: 'left',
        duration: 1000,
        distance: '55px',
        interval: 650
    });

});

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggle.innerHTML = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggle.innerHTML = "🌙";
    }
});

// Mantém o tema salvo
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.innerHTML = "☀️";
}