const button = document.getElementById("celebrate");

button.addEventListener("click", () => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // 🎈 Balloons
  for (let i = 0; i < 8; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.textContent = "🎈";

    balloon.style.left = centerX + Math.random() * 100 - 50 + "px";
    balloon.style.top = centerY + "px";

    document.body.appendChild(balloon);
    setTimeout(() => balloon.remove(), 4000);
  }

  // 🎉 Confetti
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = centerX + "px";
    confetti.style.top = centerY + "px";

    confetti.style.background =
      `hsl(${Math.random() * 360}, 100%, 60%)`;

    confetti.style.setProperty("--x", `${Math.random() * 300 - 150}px`);
    confetti.style.setProperty("--y", `${Math.random() * 300 - 150}px`);

    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 2000);
  }
});
