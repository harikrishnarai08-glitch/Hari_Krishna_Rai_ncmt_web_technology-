const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Python Coder', 'AI Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



document.addEventListener('DOMContentLoaded', () => {
    // Note the capital "T" in Typed
    const Typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Python Coder', 'AI Expert', 'Web Designer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });
});

// const dot = document.querySelector(".cursor-dot");
// const outline = document.querySelector(".cursor-outline");

// window.addEventListener("mousemove", (e) => {
//     const posX = e.clientX;
//     const posY = e.clientY;

//     // Move the dot immediately
//     dot.style.left = `${posX}px`;
//     dot.style.top = `${posY}px`;

//     // Move the outline (CSS transition handles the smooth lag)
//     outline.style.left = `${posX}px`;
//     outline.style.top = `${posY}px`;
// });