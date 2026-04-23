/* Configuração do Particles.js */
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 45, "density": { "enable": true, "value_area": 400 } },
        "color": { "value": "#007bff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": false },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#007bff", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 2, "out_mode": "out" }
    },
    "interactivity": {
        "detect_on": "window", /* MUDANÇA: Detecta o mouse em toda a janela, não só no canvas */
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
        },
        "modes": {
            "grab": { "distance": 140, "line_linked": { "opacity": 1 } }
        }
    },
    "retina_detect": true
});

/* Scroll Suave */
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        }
    });
});