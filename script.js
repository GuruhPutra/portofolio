// Navbar visibility - hide on hero section, show when scrolled past hero
function updateNavbarVisibility() {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection ? heroSection.offsetHeight : 0;

    if (window.scrollY < heroHeight - 50) {
        navbar.classList.add('hidden');
        navbar.classList.remove('scrolled');
    } else {
        navbar.classList.remove('hidden');
        navbar.classList.add('scrolled');
    }
}

window.addEventListener('scroll', updateNavbarVisibility);
window.addEventListener('load', updateNavbarVisibility);

// Show navbar when explore button is clicked
document.addEventListener('DOMContentLoaded', function() {
    const exploreBtn = document.querySelector('.hero-buttons .btn-light');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            const navbar = document.querySelector('.navbar');
            navbar.classList.remove('hidden');
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Reveal animations on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('in');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Tilt effect for cards
document.querySelectorAll('.tilt').forEach(element => {
    element.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    element.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
});

// Portfolio tabs functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.portfolio-tabs .tab');
    const items = document.querySelectorAll('.portfolio-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            items.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// Certificate modal functionality
function openCertModal(imgSrc) {
    const modal = document.getElementById('cert-modal');
    const modalImg = document.getElementById('cert-modal-content');

    modal.style.display = 'block';
    modalImg.src = imgSrc;
}

function closeCertModal() {
    const modal = document.getElementById('cert-modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('cert-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.glass-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simple form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
