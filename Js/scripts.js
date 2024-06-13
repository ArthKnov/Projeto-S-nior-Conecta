document.getElementById('confiraBtn').addEventListener('click', function() {
    scrollToSection('escolha');
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function navigateTo(page) {
    window.location.href = page;
}

