// ==========================================
// DR. SUGAR — CELEBRATION EXPERIENCE
// ==========================================

const celebrationButton = document.querySelector(".enter-btn");

// ------------------------------------------
// CONFETTI
// ------------------------------------------

function createConfetti() {

    const symbols = ["✦", "✧", "◆", "✺", "🎓"];

    for (let i = 0; i < 90; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.animationDelay = Math.random() * 1.5 + "s";
        piece.style.animationDuration =
            3 + Math.random() * 3 + "s";

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 6500);
    }
}


// ------------------------------------------
// SPARKLES
// ------------------------------------------

function createSparkles() {

    for (let i = 0; i < 35; i++) {

        const sparkle = document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.style.left = Math.random() * 100 + "vw";
        sparkle.style.top = Math.random() * 100 + "vh";

        sparkle.style.animationDelay =
            Math.random() * 3 + "s";

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 7000);
    }
}


// ------------------------------------------
// BUTTON
// ------------------------------------------

celebrationButton.addEventListener("click", () => {

    createConfetti();
    createSparkles();

});


// ------------------------------------------
// SCROLL REVEAL
// ------------------------------------------

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.25
    }
);

sections.forEach(section => {
    observer.observe(section);
});


// ------------------------------------------
// ADD DYNAMIC YEAR
// ------------------------------------------

console.log(
    "A special celebration created for Dr. Sugar 🎓"
);
