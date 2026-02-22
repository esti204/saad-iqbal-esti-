// script.js
// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth Scrolling
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

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .timeline-item, .education-card, .project-card, .skill-category').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// Hero Text Animation
const textSlides = document.querySelectorAll('.text-slide');
textSlides.forEach((slide, index) => {
    const span = document.createElement('span');
    span.textContent = slide.textContent.trim();
    slide.innerHTML = '';
    slide.appendChild(span);
    
    setTimeout(() => {
        span.style.animationDelay = `${index * 0.2}s`;
        span.classList.add('animate');
    }, 500);
});

// Parallax Effect on Profile Pic
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const profilePic = document.querySelector('.profile-pic');
    const speed = scrolled * -0.5;
    if (profilePic) {
        profilePic.style.transform = `translateY(${speed}px)`;
    }
});

// Floating Animation Enhancement
document.addEventListener('mousemove', (e) => {
    const cursor = e.clientX / window.innerWidth;
    const profilePic = document.querySelector('.profile-pic');
    if (profilePic) {
        profilePic.style.transform = `translateY(${Math.sin(cursor * Math.PI) * 5}px)`;
    }
});

// Code Sticker Effect (Interactive Particles)
function createCodeSticker(x, y) {
    const sticker = document.createElement('div');
    sticker.className = 'code-sticker';
    sticker.style.left = x + 'px';
    sticker.style.top = y + 'px';
    sticker.innerHTML = ['&lt;div&gt;', '&lt;p&gt;', 'function()', 'const', 'let', 'class', 'if()', 'for()', '//'].sort(() => Math.random() - 0.5)[0];
    document.body.appendChild(sticker);

    setTimeout(() => {
        sticker.style.opacity = '0';
        sticker.style.transform = 'translateY(-100px) rotate(360deg)';
    }, 10);

    setTimeout(() => {
        document.body.removeChild(sticker);
    }, 2000);
}

document.addEventListener('click', (e) => {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createCodeSticker(e.clientX + (Math.random() - 0.5) * 100, e.clientY + (Math.random() - 0.5) * 100);
        }, i * 50);
    }
});


// Typing Effect for Contact Info (Optional Enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize Typing Effect on scroll to contact
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const phone = document.querySelector('.contact-item:nth-child(1) span');
            const email = document.querySelector('.contact-item:nth-child(2) span');
            
            setTimeout(() => typeWriter(phone, '01815848096', 80), 200);
            setTimeout(() => typeWriter(email, 'siesti32@gmail.com', 80), 800);
        }
    });
});

document.querySelector('.contact-info').classList.add('reveal');
contactObserver.observe(document.querySelector('.contact-info'));

// Add CSS for code stickers
const style = document.createElement('style');
style.textContent = `
    .code-sticker {
        position: fixed;
        font-family: 'Courier New', monospace;
        font-size: 12px;
        color: var(--light-orange);
        pointer-events: none;
        z-index: 9999;
        opacity: 1;
        transform: translateY(0) rotate(0);
        transition: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        text-shadow: 0 0 10px rgba(252, 151, 134, 0.8);
        user-select: none;
    }
`;
document.head.appendChild(style);

// Preload Profile Image
window.addEventListener('load', () => {
    const img = new Image();
    img.src = 'ESTI-sprof2.jpg';
});
