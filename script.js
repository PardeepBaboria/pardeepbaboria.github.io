// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = 'var(--bg-primary)';
        navbar.style.backdropFilter = 'none';
    }
});

// Projects Data - This will be loaded from data folder
const projectsData = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "🛒",
        demoLink: "#",
        githubLink: "#"
    },
    {
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
        tags: ["Vue.js", "Firebase", "Tailwind CSS"],
        image: "✅",
        demoLink: "#",
        githubLink: "#"
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather dashboard with forecasts, interactive maps, and location-based weather alerts.",
        tags: ["JavaScript", "API Integration", "Chart.js"],
        image: "🌤️",
        demoLink: "#",
        githubLink: "#"
    },
    {
        title: "Social Media Analytics",
        description: "Analytics platform for social media metrics with data visualization and automated reporting features.",
        tags: ["Python", "Django", "PostgreSQL", "D3.js"],
        image: "📊",
        demoLink: "#",
        githubLink: "#"
    },
    {
        title: "Portfolio CMS",
        description: "Content management system for portfolio websites with drag-and-drop builder and SEO optimization.",
        tags: ["React", "Express", "MySQL"],
        image: "🎨",
        demoLink: "#",
        githubLink: "#"
    },
    {
        title: "Chat Application",
        description: "Real-time chat application with group messaging, file sharing, and end-to-end encryption.",
        tags: ["Socket.io", "Node.js", "React", "Redis"],
        image: "💬",
        demoLink: "#",
        githubLink: "#"
    }
];

// Function to load projects
function loadProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    
    projectsData.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        projectCard.innerHTML = `
            <div class="project-image">${project.image}</div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demoLink}" class="project-link" target="_blank">View Demo →</a>
                    <a href="${project.githubLink}" class="project-link" target="_blank">GitHub →</a>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.addEventListener('DOMContentLoaded', () => {
    // Load projects
    loadProjects();
    
    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Animate skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate project cards after they're loaded
    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    }, 100);
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Function to load project data from external file (for future use)
async function loadProjectsFromFile() {
    try {
        const response = await fetch('./data/projects.json');
        if (response.ok) {
            const projects = await response.json();
            return projects;
        }
    } catch (error) {
        console.log('Using default project data');
        return projectsData;
    }
}

// Add typing effect to hero subtitle (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
// window.addEventListener('load', () => {
//     const subtitle = document.querySelector('.hero-subtitle');
//     const originalText = subtitle.textContent;
//     typeWriter(subtitle, originalText, 100);
// });