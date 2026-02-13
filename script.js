function showMessage() {
    alert("Welcome to the future 🚀");
}

/* Typing Effect */
const text = "Hello Hackathon 🚀";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

window.onload = typeEffect;

/* Dark/Light Mode */
function toggleMode() {
    document.body.classList.toggle("light-mode");
}