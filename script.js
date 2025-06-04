function sendMessage() {
    const userInput = document.getElementById("user-input");
    const messagesContainer = document.getElementById("messages");
    
    // Get the user input
    const userMessage = userInput.value;
    
    if (userMessage.trim() === "") return; // Prevent empty messages

    // Append user's message to the chat
    messagesContainer.innerHTML += `<div class="user-message">${userMessage}</div>`;
    
    // Clear the input field
    userInput.value = "";

    // Simulate a bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        messagesContainer.innerHTML += `<div class="bot-message">${botResponse}</div>`;
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
    }, 500);
}

function getBotResponse(message) {
    // Basic responses
    const responses = {
        "hello": "Hello! How can I assist you?",
        "how are you?": "I'm just a bot, but thanks for asking!",
        "bye": "Goodbye! Have a great day!",
    };

    // Return the bot response or a default message
    return responses[message.toLowerCase()] || "I'm not sure how to respond to that.";
}

// dial

document.getElementById('dialpadButton').addEventListener('click', function() {
    window.location.href = 'tel:+91 9380711234'; // Replace with the actual phone number
});


// mail

function composeEmail() {
    const email = 'krvijaymurugan@cloudymsg.com'; // recipient email
    const subject = 'Subject Here'; // email subject
    const body = 'Body text here'; // email body

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Disable right-click
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Disable common developer tool shortcuts
document.addEventListener("keydown", (e) => {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
    }
});

// JavaScript for interactive footer functionality
document.addEventListener('DOMContentLoaded', function() {
    // Show/Hide additional services
    const showMoreTrigger = document.querySelector('.show-more-trigger');
    const hiddenServices = document.querySelector('.hidden-services');
    
    if (showMoreTrigger && hiddenServices) {
        showMoreTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (hiddenServices.classList.contains('show')) {
                hiddenServices.classList.remove('show');
                showMoreTrigger.textContent = 'View All Services';
            } else {
                hiddenServices.classList.add('show');
                showMoreTrigger.textContent = 'Show Less';
            }
        });
    }
    
    // Smooth scroll for contact section
    const contactScroll = document.getElementById('Contact_scroll');
    if (contactScroll) {
        contactScroll.addEventListener('click', function() {
            contactScroll.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // Add loading animation to footer links
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#' || this.getAttribute('href') === '') {
                e.preventDefault();
                
                // Add loading effect
                const originalText = this.textContent;
                this.textContent = 'Loading...';
                this.style.opacity = '0.6';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.opacity = '1';
                }, 1000);
            }
        });
    });
    
    // Social media click tracking
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                
                // Add click effect
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                console.log('Social media link clicked:', this.getAttribute('aria-label'));
            }
        });
    });
    
    // Intersection Observer for footer animation
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    const footerColumns = document.querySelectorAll('.footer-column');
    footerColumns.forEach(column => {
        footerObserver.observe(column);
    });
    
    // Add ripple effect to contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const rippleCSS = `
.contact-item {
    position: relative;
    overflow: hidden;
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

.animate-in {
    animation: slideInUp 0.6s ease-out;
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;

// Inject ripple CSS
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);



// theme Button


// const themeToggleButton = document.getElementById('themeToggle');
//         const themeStylesheet = document.getElementById('themeStylesheet');

//         // Check local storage for theme preference
//         const currentTheme = localStorage.getItem('theme') || 'light';
//         setTheme(currentTheme);

//         themeToggleButton.addEventListener('click', function() {
//             const newTheme = themeStylesheet.getAttribute('href') === 'light-theme.css' ? 'dark' : 'light';
//             setTheme(newTheme);
//         });

//         function setTheme(theme) {
//             if (theme === 'dark') {
//                 themeStylesheet.setAttribute('href', 'dark-theme.css');
//                 themeToggleButton.textContent = 'Switch to Light Mode';
//                 localStorage.setItem('theme', 'dark');
//             } else {
//                 themeStylesheet.setAttribute('href', 'light-theme.css');
//                 themeToggleButton.textContent = 'Switch to Dark Mode';
//                 localStorage.setItem('theme', 'light');
//             }
//         }