// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const topNav = document.getElementById('topNav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');
    
    // Mobile navigation toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
        });
    }

    // Close navigation when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            navLinks &&
            !navLinks.contains(e.target) && 
            !navToggle.contains(e.target) && 
            navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
        }
    });

    // Close navigation when clicking on nav links on mobile
    navLinksItems.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768 && navLinks) {
                navLinks.classList.remove('open');
            }
        });
    });

    // Animated background
    initAnimatedBackground();
    
    // Initialize page-specific functionality
    const currentPage = getCurrentPage();
    switch(currentPage) {
        case 'home':
            initHomePage();
            break;
        case 'skills':
            initSkillsPage();
            break;
        case 'projects':
            initProjectsPage();
            break;
        case 'experience':
            initExperiencePage();
            break;
    }

    // Initialize scroll animations
    initScrollAnimations();
});

// Get current page from URL
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '') || 'home';
    return page === 'index' ? 'home' : page;
}

// Animated background initialization
function initAnimatedBackground() {
    const animatedBg = document.getElementById('animatedBg');
    if (!animatedBg) return;

    // Create floating particles
    for (let i = 0; i < 20; i++) {
        createFloatingParticle(animatedBg, i);
    }
}

function createFloatingParticle(container, index) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    
    // Random position and animation delay
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const duration = 8 + Math.random() * 12; // 8-20 seconds
    const delay = Math.random() * 5; // 0-5 seconds delay
    
    particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(100, 255, 218, 0.3);
        border-radius: 50%;
        left: ${startX}%;
        top: ${startY}%;
        animation: floatParticle ${duration}s linear infinite;
        animation-delay: ${delay}s;
        pointer-events: none;
    `;
    
    container.appendChild(particle);
}

// Home page specific animations
function initHomePage() {
    const heroName = document.getElementById('heroName');
    const typingText = document.getElementById('typingText');
    
    if (typingText) {
        // Typing animation
        const text = "AI-Driven Software Engineer & Entrepreneur";
        const speed = 100;
        let i = 0;
        
        typingText.textContent = '';
        
        function typeWriter() {
            if (i < text.length) {
                typingText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        
        // Start typing after initial animations
        setTimeout(typeWriter, 2000);
    }

    // Floating elements interaction
    const floatingItems = document.querySelectorAll('.floating-item');
    floatingItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-5px)';
            this.style.boxShadow = '0 8px 25px rgba(100, 255, 218, 0.3)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}

// Skills page animations
function initSkillsPage() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Animate skill bars when they come into view
    const observeSkills = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.style.width;
                skillBar.style.width = '0%';
                
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 200);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observeSkills.observe(bar));

    // Skill card hover effects
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Projects page animations
function initProjectsPage() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    // Animate progress bars
    const observeProgress = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 500);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observeProgress.observe(bar));

    // Project card interactions
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'translateY(-2px)';
                    tag.style.boxShadow = '0 4px 8px rgba(100, 255, 218, 0.2)';
                }, index * 50);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach(tag => {
                tag.style.transform = '';
                tag.style.boxShadow = '';
            });
        });
    });
}

// Experience page animations
function initExperiencePage() {
    // Timeline item stagger animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease-out';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 150 + 300);
    });

    // Highlight cards stagger animation
    const highlightCards = document.querySelectorAll('.highlight-card');
    highlightCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100 + 500);
    });

    // Skills badges animation
    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            badge.style.transition = 'all 0.4s ease-out';
            badge.style.opacity = '1';
            badge.style.transform = 'scale(1)';
        }, index * 50 + 800);
    });

    // Initialize tooltips
    initTooltips();
}

// Tooltip functionality
function initTooltips() {
    const infoIcons = document.querySelectorAll('.info-icon');
    const tooltip = document.getElementById('tooltip');
    
    if (!tooltip) return;

    infoIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function(e) {
            const tooltipText = this.getAttribute('data-tooltip');
            if (tooltipText) {
                tooltip.textContent = tooltipText;
                tooltip.classList.add('visible');
                
                // Position tooltip to the right of the team name
                const teamTitle = this.closest('.team-title');
                const rect = teamTitle.getBoundingClientRect();
                
                let left = rect.right + 15;
                let top = rect.top + (rect.height / 2) - 15;
                
                // Ensure tooltip stays within viewport
                const tooltipRect = tooltip.getBoundingClientRect();
                if (left + 250 > window.innerWidth - 10) {
                    left = rect.left - 265;
                }
                if (top < 10) {
                    top = 10;
                }
                if (top + 40 > window.innerHeight - 10) {
                    top = window.innerHeight - 50;
                }
                
                tooltip.style.left = left + 'px';
                tooltip.style.top = top + 'px';
            }
        });

        icon.addEventListener('mouseleave', function() {
            tooltip.classList.remove('visible');
        });
    });

    // Hide tooltip when scrolling
    window.addEventListener('scroll', function() {
        tooltip.classList.remove('visible');
    });
}


// Generic scroll animations
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.section-header, .experience-card, .project-card');
    
    const observeScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
        observeScroll.observe(element);
    });
}

// Counter animation utility
function animateCounter(element) {
    const target = element.textContent;
    const isPercentage = target.includes('%');
    const isArrow = target.includes('→');
    const isPlus = target.includes('+');
    
    let finalNumber;
    let suffix = '';
    
    if (isPercentage) {
        finalNumber = parseFloat(target);
        suffix = '%';
    } else if (isPlus) {
        finalNumber = parseFloat(target);
        suffix = '+';
    } else if (isArrow) {
        // Handle "400+ → 15" format
        element.textContent = target; // Keep original format
        return;
    } else {
        finalNumber = parseFloat(target) || 0;
        if (target.includes('K')) {
            suffix = 'K';
            finalNumber = parseFloat(target) * 1000;
        }
    }
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = finalNumber / steps;
    const stepTime = duration / steps;
    
    let currentNumber = 0;
    
    const counter = setInterval(() => {
        currentNumber += stepValue;
        
        if (currentNumber >= finalNumber) {
            currentNumber = finalNumber;
            clearInterval(counter);
        }
        
        let displayNumber = currentNumber;
        let displaySuffix = suffix;
        
        if (suffix === 'K') {
            displayNumber = (currentNumber / 1000).toFixed(1);
            displaySuffix = 'K+';
        } else if (suffix === '%') {
            displayNumber = currentNumber.toFixed(1);
        } else if (suffix === '+') {
            displayNumber = Math.floor(currentNumber);
        } else {
            displayNumber = Math.floor(currentNumber);
        }
        
        element.textContent = displayNumber + displaySuffix;
    }, stepTime);
}

// Smooth scrolling utility
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add CSS for dynamic styles
const dynamicStyles = `
    .floating-particle {
        box-shadow: 0 0 6px rgba(100, 255, 218, 0.4);
    }
    
    @keyframes floatParticle {
        0% {
            transform: translateY(100vh) translateX(0px) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) translateX(100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .tech-tag, .app-tag, .research-tag {
        transition: all 0.3s ease;
    }
    
    .achievement-metric, .metric-value, .impact-metric, .stat-number {
        transition: all 0.3s ease;
    }
`;

// Inject dynamic styles
const styleSheet = document.createElement('style');
styleSheet.textContent = dynamicStyles;
document.head.appendChild(styleSheet);

// Performance optimization: throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add parallax effect to background elements (optional)
window.addEventListener('scroll', throttle(() => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.animated-background');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, 16)); // ~60fps

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                window.location.href = 'index.html';
                break;
            case '2':
                e.preventDefault();
                window.location.href = 'experience.html';
                break;
            case '3':
                e.preventDefault();
                window.location.href = 'projects.html';
                break;
            case '4':
                e.preventDefault();
                window.location.href = 'skills.html';
                break;
        }
    }
});
// Resume button functionality
document.addEventListener('DOMContentLoaded', function() {
    const resumeBtn = document.getElementById("resumeBtn");
    if (resumeBtn) {
        resumeBtn.addEventListener("click", function(e) {
            e.preventDefault();
            alert("Resume not yet uploaded. Please contact via LinkedIn for now.");
        });
    }
});
