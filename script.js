document.addEventListener('DOMContentLoaded', function () {

    // Navbar scroll effect
    var navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function () {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
    });

    // Mobile menu toggle
    var navToggle = document.getElementById('navToggle');
    var navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu on link click
    navMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll animations
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll(
        '.service-card, .advantage-card, .testimonial-card, .contact-card, .area-tag'
    ).forEach(function (el) {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Contact form
    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var message = document.getElementById('message').value.trim();

        var subject = encodeURIComponent('Kontaktanfrage von ' + name);
        var body = encodeURIComponent(
            'Name: ' + name + '\n' +
            'E-Mail: ' + email + '\n' +
            'Telefon: ' + (phone || 'nicht angegeben') + '\n\n' +
            message
        );

        window.location.href = 'mailto:info@kfz-gutachter-kajtazi.de?subject=' + subject + '&body=' + body;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
