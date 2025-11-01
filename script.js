// Portfolio Data - Replace with actual YouTube video IDs
const portfolioData = [
    {
        id: 1,
        title: "Epic Gaming Montage",
        category: "gaming",
        videoId: "5O0YDHiosD0",
        thumbnail: "https://img.youtube.com/vi/5O0YDHiosD0/maxresdefault.jpg"
    },
    {
        id: 2,
        title: "Short Form Viral Content",
        category: "short-form",
        videoId: "dQw4w9WgXcQ",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
        id: 3,
        title: "Professional Documentary",
        category: "documentary",
        videoId: "jNQXAC9IVRw",
        thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg"
    },
    {
        id: 4,
        title: "Football Highlights Reel",
        category: "football",
        videoId: "y6120QOlsfU",
        thumbnail: "https://img.youtube.com/vi/y6120QOlsfU/maxresdefault.jpg"
    },
    {
        id: 5,
        title: "Product Advertisement",
        category: "ecommerce",
        videoId: "3JZ_D3ELwOQ",
        thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/maxresdefault.jpg"
    },
    {
        id: 6,
        title: "Long Form Tutorial",
        category: "long-form",
        videoId: "kJQP7kiw5Fk",
        thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg"
    },
    {
        id: 7,
        title: "Color Grading Showcase",
        category: "color-grading",
        videoId: "9bZkp7q19f0",
        thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg"
    },
    {
        id: 8,
        title: "Anime Edit Compilation",
        category: "anime",
        videoId: "fJ9rUzIMcZQ",
        thumbnail: "https://img.youtube.com/vi/fJ9rUzIMcZQ/maxresdefault.jpg"
    },
    {
        id: 9,
        title: "Brand Commercial",
        category: "ads",
        videoId: "YQHsXMglC9A",
        thumbnail: "https://img.youtube.com/vi/YQHsXMglC9A/maxresdefault.jpg"
    },
    {
        id: 10,
        title: "Gaming Stream Highlights",
        category: "gaming",
        videoId: "dQw4w9WgXcQ",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
        id: 11,
        title: "Instagram Reels Package",
        category: "short-form",
        videoId: "jNQXAC9IVRw",
        thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg"
    },
    {
        id: 12,
        title: "eCommerce Product Demo",
        category: "ecommerce",
        videoId: "y6120QOlsfU",
        thumbnail: "https://img.youtube.com/vi/y6120QOlsfU/maxresdefault.jpg"
    },
    {
        id: 13,
        title: "Cinematic Travel Video",
        category: "documentary",
        videoId: "5O0YDHiosD0",
        thumbnail: "https://img.youtube.com/vi/5O0YDHiosD0/maxresdefault.jpg"
    },
    {
        id: 14,
        title: "Sports Highlight Reel",
        category: "football",
        videoId: "3JZ_D3ELwOQ",
        thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/maxresdefault.jpg"
    },
    {
        id: 15,
        title: "Professional Color Grade",
        category: "color-grading",
        videoId: "kJQP7kiw5Fk",
        thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg"
    },
    {
        id: 16,
        title: "Anime AMV",
        category: "anime",
        videoId: "9bZkp7q19f0",
        thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg"
    },
    {
        id: 17,
        title: "Product Launch Ad",
        category: "ads",
        videoId: "fJ9rUzIMcZQ",
        thumbnail: "https://img.youtube.com/vi/fJ9rUzIMcZQ/maxresdefault.jpg"
    },
    {
        id: 18,
        title: "YouTube Video Essay",
        category: "long-form",
        videoId: "YQHsXMglC9A",
        thumbnail: "https://img.youtube.com/vi/YQHsXMglC9A/maxresdefault.jpg"
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const portfolioGrid = document.getElementById('portfolioGrid');
const videoModal = document.getElementById('videoModal');
const statNumbers = document.querySelectorAll('.stat-number');

// Mobile Menu Toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Generate Portfolio Items
function generatePortfolioItems() {
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = '';
    
    portfolioData.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');
        portfolioItem.setAttribute('data-category', item.category);
        
        portfolioItem.innerHTML = `
            <div class="portfolio-thumbnail">
                <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
                <div class="play-button">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="portfolio-info">
                <h3 class="portfolio-title">${item.title}</h3>
                <span class="portfolio-category">${formatCategory(item.category)}</span>
            </div>
        `;
        
        portfolioItem.addEventListener('click', () => openVideoModal(item));
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Format Category Name
function formatCategory(category) {
    return category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Filter Portfolio Items
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter items
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach(item => {
            item.classList.remove('hide');
            
            if (filter !== 'all') {
                if (item.getAttribute('data-category') !== filter) {
                    item.classList.add('hide');
                }
            }
        });
    });
});

// Open Video Modal
function openVideoModal(item) {
    if (!videoModal) return;
    
    const videoFrame = document.getElementById('videoFrame');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    
    const videoUrl = `https://www.youtube.com/embed/${item.videoId}?autoplay=1`;
    videoFrame.src = videoUrl;
    modalTitle.textContent = item.title;
    modalCategory.textContent = formatCategory(item.category);
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Video Modal
function closeVideoModal() {
    if (!videoModal) return;
    
    const videoFrame = document.getElementById('videoFrame');
    videoModal.classList.remove('active');
    videoFrame.src = '';
    document.body.style.overflow = 'auto';
}

// Modal close handlers
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

if (modalClose) {
    modalClose.addEventListener('click', closeVideoModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeVideoModal);
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
        closeVideoModal();
    }
});

// Animated Counter for Stats
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    
    updateCounter();
}

// Intersection Observer for Stats Animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('animated')) {
                animateCounter(statNumber);
                statNumber.classList.add('animated');
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(item => {
    statsObserver.observe(item);
});

// Scroll Animation for Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add animation to choose cards
document.querySelectorAll('.choose-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Form Submission Handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    }
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-content');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 700;
    }
});

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add hover effect
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Initialize on Page Load
document.addEventListener('DOMContentLoaded', () => {
    // Generate portfolio items if on portfolio page
    generatePortfolioItems();
    
    // Add entrance animations for portfolio items
    setTimeout(() => {
        document.querySelectorAll('.portfolio-item').forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
    
    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Prevent right-click on videos (optional protection)
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'VIDEO' || e.target.tagName === 'IFRAME') {
        e.preventDefault();
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    // Scroll logic handled in individual scroll listeners above
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

console.log('Editkaro.in Portfolio Loaded Successfully! 🎬');