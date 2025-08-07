document.addEventListener("DOMContentLoaded", function() {
  console.log("Website loaded successfully!");
});

const text = "Welcome to My Webpage!";
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust typing speed
    } else {
        setTimeout(() => {
            document.getElementById("text").innerHTML = ""; // Clear text
            index = 0; // Reset index
            typeText(); // Restart typing effect
        }, 5000); // Wait 5 seconds before restarting
    }
}

window.onload = typeText; // Start typing effect on page load

function updateDateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}`;
    document.getElementById('date').textContent = `${day}`;
    document.getElementById('min').textContent = `${minutes}`;
    document.getElementById('sec').textContent = `${seconds}`;

    
}
setInterval(updateDateTime, 1000);
updateDateTime();