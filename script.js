// script.js
document.addEventListener("DOMContentLoaded", () => {
    const moon = document.createElement("img");
    moon.src = "moon.jpg"; // Replace with the URL of your moon image
    moon.style.position = "absolute";
    moon.style.width = "100px";
    moon.style.height = "100px";
    moon.style.zIndex = "1000"; // Add this line to set the z-index

    const header = document.querySelector("header h1");
    const headerRect = header.getBoundingClientRect();
    moon.style.left = headerRect.left + "px";
    moon.style.top = headerRect.top + "px";

    document.body.appendChild(moon);

    const moonSpeed = 2; // Adjust this value to change the moon's speed

    function animateMoon() {
        moon.style.left = parseInt(moon.style.left) + moonSpeed + "px";
        if (parseInt(moon.style.left) > window.innerWidth) { 
            // Animation is infinite
            moon.style.left = -moon.clientWidth + "px";
        }
        requestAnimationFrame(animateMoon);
    }

    animateMoon();
});
