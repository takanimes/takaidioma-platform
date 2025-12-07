document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('sakura-container');
    const isMobile = window.innerWidth < 768;
    const limit = isMobile ? 8 : 25; 

    function createPetal() {
        if(container.childElementCount > limit) return;
        
        const petal = document.createElement('div');
        petal.classList.add('sakura');
        const size = Math.random() * 8 + 5;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.left = Math.random() * 100 + 'vw';
        const duration = Math.random() * 5 + 8;
        petal.style.animation = `fall ${duration}s linear forwards`;
        container.appendChild(petal);
        
        setTimeout(() => {
            if(petal.parentNode) petal.parentNode.removeChild(petal);
        }, duration * 1000);
    }

    setInterval(createPetal, isMobile ? 1200 : 600);
});
