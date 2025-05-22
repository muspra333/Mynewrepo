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