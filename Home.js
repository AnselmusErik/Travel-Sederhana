// scripts.js
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        var targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
