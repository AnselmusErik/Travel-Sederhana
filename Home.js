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


// Coba galery
window.addEventListener('DOMContentLoaded', (event) => {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});

// Coba Judul
window.addEventListener('DOMContentLoaded', (event) => {
    const title = document.getElementById('title');
    const subtitle = document.getElementById('subtitle');

    title.addEventListener('mouseover', () => {
        title.style.color = '#28a745';
    });

    title.addEventListener('mouseout', () => {
        title.style.color = '#007bff';
    });

    subtitle.addEventListener('mouseover', () => {
        subtitle.style.color = '#17a2b8';
    });

    subtitle.addEventListener('mouseout', () => {
        subtitle.style.color = '#6c757d';
    });
});
