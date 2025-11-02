// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Configuração do Intersection Observer
    const observerOptions = {
        root: null, // Observa a viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% do elemento visível dispara o callback
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Se o elemento estiver visível, adiciona a classe 'reveal'
                entry.target.classList.add('reveal');
                // Para de observar o elemento, pois ele já foi revelado
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 2. Aplicar a observação a todos os elementos com a classe 'hidden'
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(element => {
        observer.observe(element);
    });
    
    // 3. Efeito de transparência no cabeçalho ao rolar (Sticky Header)
    const header = document.querySelector('.cabecalho');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)'; // Fundo quase opaco ao rolar
            header.style.borderBottom = '1px solid var(--cor-borda)';
        } else {
            header.style.backgroundColor = 'transparent'; // Fundo transparente no topo
            header.style.borderBottom = '1px solid transparent';
        }
    });
});