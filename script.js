// Script principal para RAMDUT Landing Page

// Variáveis globais
let chatModal = null;
let messageInput = null;
let chatMessages = null;

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    setupEventListeners();
    setupSmoothScrolling();
    setupScrollAnimation();
    setupMobileMenu();
});

// Inicializar elementos do DOM
function initializeElements() {
    chatModal = document.getElementById('chatModal');
    messageInput = document.getElementById('messageInput');
    chatMessages = document.querySelector('.chat-messages');
}

// Configurar event listeners
function setupEventListeners() {
    // Event listener para pressionar Enter no chat
    if (messageInput) {
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Event listener para fechar modal clicando fora
    if (chatModal) {
        chatModal.addEventListener('click', function(e) {
            if (e.target === chatModal) {
                closeChat();
            }
        });
    }

    // Event listener para formulário de contato
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

// Configurar navegação suave
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Ajuste para header fixo
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Configurar animações de scroll
function setupScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animar cards e seções
    const animatedElements = document.querySelectorAll('.about-card, .feature-item, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Configurar menu mobile
function setupMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
}

// Funções do Chat
function openChat() {
    if (chatModal) {
        chatModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focar no input de mensagem
        setTimeout(() => {
            if (messageInput) {
                messageInput.focus();
            }
        }, 300);
    }
}

function closeChat() {
    if (chatModal) {
        chatModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function toggleChat() {
    if (chatModal && chatModal.classList.contains('active')) {
        closeChat();
    } else {
        openChat();
    }
}

function sendMessage() {
    if (!messageInput || !chatMessages) return;
    
    const messageText = messageInput.value.trim();
    if (messageText === '') return;
    
    // Adicionar mensagem do usuário
    addMessage(messageText, 'user');
    
    // Limpar input
    messageInput.value = '';
    
    // Simular resposta do bot após um delay
    setTimeout(() => {
        const botResponse = generateBotResponse(messageText);
        addMessage(botResponse, 'bot');
    }, 1000);
}

function addMessage(text, sender) {
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const currentTime = new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    if (sender === 'user') {
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${text}</p>
                <span class="message-time">${currentTime}</span>
            </div>
            <div class="message-avatar">
                <span>👤</span>
            </div>
        `;
        messageDiv.style.flexDirection = 'row-reverse';
    } else {
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <span>∞</span>
            </div>
            <div class="message-content">
                <p>${text}</p>
                <span class="message-time">${currentTime}</span>
            </div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    
    // Scroll para a última mensagem
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Adicionar animação de entrada
    setTimeout(() => {
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0)';
    }, 100);
    
    messageDiv.style.opacity = '0';
    messageDiv.style.transform = 'translateY(20px)';
    messageDiv.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
}

function generateBotResponse(userMessage) {
    const responses = {
        'oi': 'Olá! Como posso ajudá-lo hoje?',
        'olá': 'Oi! Bem-vindo ao RAMDUT! 😊',
        'hello': 'Hello! Welcome to RAMDUT!',
        'help': 'Estou aqui para ajudar! Você pode me perguntar sobre nossos recursos, como usar a plataforma ou qualquer outra dúvida.',
        'ajuda': 'Claro! Em que posso ajudá-lo? Posso explicar sobre nossos recursos ou responder suas dúvidas.',
        'recursos': 'O RAMDUT oferece chat em tempo real, segurança avançada, interface responsiva e total personalização!',
        'features': 'RAMDUT features include real-time chat, advanced security, responsive interface and full customization!',
        'sobre': 'O RAMDUT é uma plataforma que conecta pessoas através de conversas infinitas e experiências únicas. Nosso símbolo do infinito representa as possibilidades ilimitadas de conexão.',
        'contato': 'Você pode nos contactar através do email contato@ramdut.com ou pelo nosso GitHub!',
        'github': 'Nosso projeto está disponível no GitHub! Você pode contribuir e acompanhar o desenvolvimento.',
        'default': [
            'Interessante! Me conte mais sobre isso.',
            'Entendo. Como posso ajudá-lo melhor?',
            'Obrigado por compartilhar isso comigo!',
            'Essa é uma ótima pergunta! Vou pesquisar mais sobre isso.',
            'Vamos conversar mais sobre isso! O que você gostaria de saber?'
        ]
    };
    
    const lowerMessage = userMessage.toLowerCase();
    
    // Procurar por palavras-chave na mensagem
    for (let key in responses) {
        if (key !== 'default' && lowerMessage.includes(key)) {
            return responses[key];
        }
    }
    
    // Resposta padrão aleatória
    const defaultResponses = responses.default;
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Função para handle do formulário de contato
function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name') || e.target.querySelector('input[type="text"]').value;
    const email = formData.get('email') || e.target.querySelector('input[type="email"]').value;
    const message = formData.get('message') || e.target.querySelector('textarea').value;
    
    // Simular envio de formulário
    showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
    
    // Limpar formulário
    e.target.reset();
}

// Função para mostrar notificações
function showNotification(message, type = 'info') {
    // Remover notificação existente se houver
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">×</button>
    `;
    
    // Adicionar estilos da notificação
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 1rem;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    
    // Adicionar botão de fechar
    const closeBtn = notification.querySelector('button');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(notification);
    
    // Remover automaticamente após 5 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Adicionar estilos de animação para notificação
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--primary-color);
        border-top: 1px solid var(--secondary-color);
        padding: 1rem 2rem;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
    }
`;

document.head.appendChild(style);

// Função para scroll suave para seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Efeito de paralaxe para símbolos flutuantes
function updateFloatingSymbols() {
    const symbols = document.querySelectorAll('.floating-symbols .symbol');
    const scrollY = window.scrollY;
    
    symbols.forEach((symbol, index) => {
        const speed = 0.1 + (index % 3) * 0.05;
        const translateY = scrollY * speed;
        symbol.style.transform = `translateY(${translateY}px)`;
    });
}

// Adicionar efeito de paralaxe no scroll
window.addEventListener('scroll', function() {
    requestAnimationFrame(updateFloatingSymbols);
});

// Função para destacar seção ativa na navegação
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Adicionar listener para destacar seção ativa
window.addEventListener('scroll', updateActiveNavLink);

// Executar quando a página carregar completamente
window.addEventListener('load', function() {
    // Adicionar classe para animações de entrada
    document.body.classList.add('loaded');
    
    // Inicializar destacamento da seção ativa
    updateActiveNavLink();
});

console.log('🚀 RAMDUT Landing Page carregada com sucesso!');