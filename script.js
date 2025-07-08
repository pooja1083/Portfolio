function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  // Create 40 floating particles
const background = document.getElementById("background-animation");

for (let i = 0; i < 40; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  // Random size between 5px and 15px
  const size = Math.random() * 10 + 5;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  // Random horizontal position
  particle.style.left = `${Math.random() * 100}%`;

  // Random animation timing
  particle.style.animationDuration = `${5 + Math.random() * 5}s`;
  particle.style.animationDelay = `${Math.random() * 5}s`;

  background.appendChild(particle);
}
