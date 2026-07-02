// ===== Initialize AOS =====
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 80
});

// ===== Vanta.js Background =====
let vantaEffect = null;
const isDark = () => document.body.classList.contains('dark-mode');

function initVanta() {
    if (vantaEffect) vantaEffect.destroy();
    vantaEffect = VANTA.NET({
        el: '#vanta-bg',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: isDark() ? 0x5a3fd1 : 0x6a11cb,
        backgroundColor: isDark() ? 0x0a0a1a : 0x0a0020,
        points: 12.00,
        maxDistance: 22.00,
        spacing: 18.00,
        showDots: true
    });
}

// Initialize Vanta after a short delay to ensure DOM is ready
setTimeout(initVanta, 100);

// ===== Typed.js =====
const typed = new Typed('#typed-output', {
    strings: [
        'Senior Machine Learning Scientist',
        'PMP® &amp; RAI Certified Professional',
        'Turning Data into Decisions'
    ],
    typeSpeed: 45,
    backSpeed: 30,
    backDelay: 2200,
    startDelay: 600,
    loop: true,
    showCursor: true,
    cursorChar: '|'
});


// ===== Dark Mode Toggle =====
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('#darkModeToggle i');
    const text = document.getElementById('darkModeText');

    if (isDark()) {
        icon.classList.replace('fa-moon', 'fa-sun');
        text.textContent = 'Light';
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        text.textContent = 'Dark';
    }

    // Re-init Vanta with new colors
    initVanta();


}


// ===== Staggered Skill Tag Animation =====
const tagObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const tags = entry.target.querySelectorAll('.skill-tag');
            tags.forEach((tag, i) => {
                tag.style.animationDelay = `${i * 0.06}s`;
            });
            entry.target.classList.add('skill-tags-animated');
            tagObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-tags').forEach(container => {
    tagObserver.observe(container);
});

// ===== Navbar Scroll Behavior =====
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNav');
    const backToTop = document.getElementById('backToTop');

    // Navbar scroll effect
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top button
    if (window.scrollY > 400) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// ===== Back to Top =====
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Activate Bootstrap Scrollspy =====
new bootstrap.ScrollSpy(document.body, {
    target: '#navbarNav',
    rootMargin: '0px 0px -40%',
    smoothScroll: true
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===== Project Modal Interactivity =====
document.querySelectorAll('.project-card').forEach(item => {
    item.addEventListener('click', function () {
        const title = this.querySelector('h5').textContent;
        const img = this.querySelector('img').getAttribute('src');
        const repoLink = this.querySelector('.project-links a');
        const repo = repoLink ? repoLink.getAttribute('href') : '#';

        document.getElementById('projectModalLabel').textContent = title;
        document.querySelector('.modal-img').setAttribute('src', img);
        document.getElementById('projectRepoLink').setAttribute('href', repo);
    });
});
