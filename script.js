const messages = [
    "ผมรักคุณมากนะ ❤️",
    "รักมากที่สุดด",
    "รักนะสุดสวยน่ารัก :>",
    "จากนัท",
    "บายๆๆๆ🤍"
];

const loveMessage = document.getElementById("loveMessage");
const heartContainer = document.getElementById("heartContainer");

let currentMessageIndex = 0;

function displayMessage(message) {
    loveMessage.innerHTML = "";  // Clear current message

    message.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.classList.add("fade-in");
        span.style.animationDelay = `${index * 0.1}s`; // Delay each letter
        loveMessage.appendChild(span);
    });
}

function showNextMessage() {
    if (currentMessageIndex < messages.length) {
        displayMessage(messages[currentMessageIndex]);
        currentMessageIndex++;
        setTimeout(showNextMessage, 3000); // Change message every 3 seconds
    } else {
        // After the last message, show the heart after 3 seconds
        setTimeout(() => {
            heartContainer.style.display = "flex"; // Show the heart
        }, 3000); // Wait for 3 seconds before showing the heart
    }
}

// Start showing messages
showNextMessage();
