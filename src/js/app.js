/* sweetScroll and interactive hero particles */
document.addEventListener("DOMContentLoaded", function () {
  if (typeof SweetScroll !== "undefined") {
    new SweetScroll({});
  }

  if (typeof particlesJS === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  particlesJS("particles-js", {
    particles: {
      number: {
        value: window.innerWidth < 768 ? 24 : 42,
        density: { enable: true, value_area: 800 }
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.42,
        random: true,
        anim: { enable: false }
      },
      size: {
        value: 2.6,
        random: true,
        anim: { enable: false }
      },
      line_linked: {
        enable: true,
        distance: 145,
        color: "#ffffff",
        opacity: 0.24,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.7,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: {
          distance: 170,
          line_linked: { opacity: 0.65 }
        },
        push: { particles_nb: 3 }
      }
    },
    retina_detect: true
  });

  var particleCanvas = document.querySelector("#particles-js canvas");
  if (particleCanvas) {
    particleCanvas.setAttribute("aria-hidden", "true");
    particleCanvas.setAttribute("tabindex", "-1");
  }
}, false);
