(function() {
    // Бургер-меню
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
    if (burger) {
        burger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    // Плавная прокрутка к якорям
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Анимация появления элементов при скролле
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.fade-in').forEach(function(el) {
        observer.observe(el);
    });
})();