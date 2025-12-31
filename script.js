const confettiContainer = document.getElementById("confetti");

const colors = ["#ff4d4d", "#ffd93d", "#4dabf7", "#69db7c", "#da77f2"];

for (let i = 0; i < 40; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 0.5 + "s";

    confettiContainer.appendChild(piece);
}

/* 2초 후 팡파레 제거 */
setTimeout(() => {
    confettiContainer.remove();
}, 2000);
