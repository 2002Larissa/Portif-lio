
/* Configuração do Particles.js */
/* particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#007bff" }, 
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": false },
        "size": { "value": 3, "random": true },
        "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#007bff",
        "opacity": 0.4,
        "width": 1
        },
        "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": true, "mode": "push" },
        "resize": true
        },
        "modes": {
        "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
        "push": { "particles_nb": 4 }
        }
    },
    "retina_detect": true
    });
 */
/* Manter seu código anterior de scroll suave abaixo aqui */

// Adiciona efeito de rolagem suave aos links de navegação
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        // Impede o comportamento padrão do link
        event.preventDefault();

        // Obtém o ID do alvo (ex: #sobre)
        const targetId = this.getAttribute('href');
        
        // Seleciona o elemento alvo
        const targetElement = document.querySelector(targetId);

        // Se o elemento alvo existir, rola até ele de forma suave
        if (targetElement) {
            // Ajuste fino para a altura do cabeçalho fixo (aprox. 80px)
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});