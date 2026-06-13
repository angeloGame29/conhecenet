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