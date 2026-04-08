const text = "SAYAN JANA";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 180);
  }
}

window.onload = typeEffect;
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.onclick = () => {
  document.body.classList.toggle("light-mode");

  // Change icon
  if (document.body.classList.contains("light-mode")) {
    toggleBtn.innerHTML = "☀️";
  } else {
    toggleBtn.innerHTML = "🌙";
  }
};



window.addEventListener("load", () => {
  tsParticles.load("tsparticles", {
    fullScreen: {
      enable: false
    },

    background: {
      color: "transparent"
    },

    particles: {
      number: {
        value: 50
      },

      color: {
        value: "#00FFFF"
      },

      links: {
        enable: true,
        distance: 250,
        color: "#00FFFF",
        opacity: 0.2
      },

      move: {
        enable: true,
        speed: 0.8
      },

      size: {
        value: { min: 1, max: 3 }
      },

      opacity: {
        value: 0.4
      }
    }
  });
});