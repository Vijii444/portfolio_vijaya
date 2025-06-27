// Animated typing effect for the hero section
const text = 'Welcome to My Portfolio';
const typedText = document.getElementById('typed-text');
let index = 0;

function type() {
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

document.addEventListener('DOMContentLoaded', type);

// Fade-in animation for sections on scroll
function revealSections() {
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);

// Smooth scroll to Projects section on button click
const walkthroughBtn = document.getElementById('walkthrough-btn');
if (walkthroughBtn) {
    walkthroughBtn.addEventListener('click', function() {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Live Resume modal logic
const resumeCards = document.querySelectorAll('.resume-card');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.modal .close');

resumeCards.forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
        }
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Game Level Selector logic
const levelCards = document.querySelectorAll('.level-card');
levelCards.forEach(card => {
    card.addEventListener('click', function() {
        // Unlock animation
        card.classList.add('unlocked');
        setTimeout(() => {
            card.classList.remove('unlocked');
        }, 600);
        // Scroll to section
        const target = card.getAttribute('data-target');
        if (target) {
            const section = document.querySelector(target);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Project card expand/collapse logic
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
        // Collapse all cards
        projectCards.forEach(c => c.classList.remove('active'));
        // Expand this card
        card.classList.add('active');
        // Prevent page scroll
        e.preventDefault();
    });
}); 