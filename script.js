// Configuração do Tailwind
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    purple: '#8B5CF6',
                    dark: '#0D0C13',
                    surface: '#1E1B2E',
                    green: '#22c55e'
                }
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        }
    }
}

// Lógica das Pétalas Sakura
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
