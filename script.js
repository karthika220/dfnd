// Smooth scrolling for navigation
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

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature-card, .trust-card, .faq-item');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// CTA and explore button functionality
document.querySelectorAll('.cta-btn, .explore-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Add your contact form or modal logic here
        alert('Contact form would open here. Please add your contact details or form integration.');
    });
});

// Contact buttons now use tel: links for direct phone calls

// Hero banner video handling
document.addEventListener('DOMContentLoaded', function() {
    const heroBannerVideo = document.getElementById('heroBannerVideo') || document.querySelector('.hero-banner-video');
    if (heroBannerVideo) {
        // Set video properties
        heroBannerVideo.setAttribute('autoplay', '');
        heroBannerVideo.setAttribute('muted', '');
        heroBannerVideo.setAttribute('loop', '');
        heroBannerVideo.setAttribute('playsinline', '');
        heroBannerVideo.setAttribute('preload', 'auto');
        
        // Ensure video plays
        heroBannerVideo.play().catch(function(error) {
            console.log('Hero banner video autoplay prevented:', error);
            // Try to play again after user interaction
            document.addEventListener('click', function playVideo() {
                heroBannerVideo.play().catch(function(err) {
                    console.log('Video play failed:', err);
                });
                document.removeEventListener('click', playVideo);
            }, { once: true });
        });
        
        // Handle video load errors
        heroBannerVideo.addEventListener('error', function(e) {
            console.error('Video loading error:', e);
            console.log('Video source:', heroBannerVideo.querySelector('source').src);
        });
        
        // Log when video starts playing
        heroBannerVideo.addEventListener('play', function() {
            console.log('Hero banner video is playing');
        });
    }
    
    // Action video handling
    const actionVideo = document.querySelector('.action-video');
    if (actionVideo) {
        // Ensure video plays on mobile devices
        actionVideo.play().catch(function(error) {
            console.log('Action video autoplay prevented:', error);
        });
    }
});

// Add hover effect to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add smooth reveal animation on scroll
function reveal() {
    const reveals = document.querySelectorAll('.about-content, .sun-film-content, .engineering-content');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // Call once on load

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Counter animation for statistics (if you want to add any)
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Mobile menu toggle (if you add a mobile menu)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav-content');
    nav.classList.toggle('mobile-active');
}

// Add scroll progress indicator
function updateScrollProgress() {
    const scrollProgress = document.createElement('div');
    scrollProgress.id = 'scroll-progress';
    scrollProgress.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(to right, #c4ff0e, #a3d40a);
        z-index: 9999;
        transition: width 0.2s ease;
    `;
    document.body.appendChild(scrollProgress);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
updateScrollProgress();

// Add button ripple effect
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('DFND X Website Loaded Successfully');
