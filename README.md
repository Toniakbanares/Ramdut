# RAMDUT ∞

## Conectando Infinitas Possibilidades

Uma landing page moderna e interativa com tema do símbolo do infinito, cores cinza claro e chat estilizado como fórum.

![RAMDUT Preview](https://img.shields.io/badge/Status-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Características

- 🎨 **Design Moderno**: Interface limpa com cores cinza claro e detalhes dourados
- ∞ **Tema Infinito**: Símbolo do infinito como elemento central do design
- 💬 **Chat Interativo**: Sistema de chat estilizado como fórum com bot inteligente
- 🌟 **Símbolos Flutuantes**: Animações suaves com símbolos dourados em movimento
- 📱 **Responsivo**: Funciona perfeitamente em todos os dispositivos
- ⚡ **Performance**: Carregamento rápido e animações suaves
- 🚀 **GitHub Pages Ready**: Pronto para deploy no GitHub Pages

## 🎭 Recursos Visuais

### Paleta de Cores
- **Primária**: `#f5f5f5` (Cinza muito claro)
- **Secundária**: `#e8e8e8` (Cinza claro)
- **Accent**: `#d4d4d4` (Cinza médio)
- **Dourado**: `#ffd700` (Ouro)
- **Texto**: `#2d2d2d` (Cinza escuro)

### Elementos Interativos
- Botão de chat flutuante
- Modal de chat estilizado
- Símbolos animados no fundo
- Navegação suave entre seções
- Animações de entrada nos elementos

## 🚀 Como Configurar o GitHub Pages

### 1. Criar o Repositório
```bash
# Clonar ou criar um novo repositório chamado RAMDUT
git init
git add .
git commit -m "feat: adicionar landing page RAMDUT"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/RAMDUT.git
git push -u origin main
```

### 2. Ativar GitHub Pages
1. Acesse seu repositório no GitHub
2. Vá para **Settings** (Configurações)
3. Role para baixo até **Pages**
4. Em **Source**, selecione **Deploy from a branch**
5. Escolha **main** branch e **/ (root)**
6. Clique em **Save**

### 3. Configurar Domínio Personalizado (Opcional)
1. Na seção Pages, adicione seu domínio personalizado
2. Configure os DNS do seu domínio para apontar para GitHub Pages

## 📁 Estrutura do Projeto

```
RAMDUT/
├── index.html          # Página principal
├── style.css          # Estilos principais
├── script.js          # JavaScript interativo
├── README.md          # Este arquivo
└── assets/            # Recursos adicionais (se necessário)
    └── images/        # Imagens do projeto
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica moderna
- **CSS3**: Animações, Grid, Flexbox, Custom Properties
- **JavaScript ES6+**: Interatividade e funcionalidades do chat
- **Font Awesome**: Ícones modernos
- **Google Fonts**: Tipografia Inter

## 💬 Funcionalidades do Chat

O chat interativo inclui:
- Respostas automáticas inteligentes
- Interface estilo fórum
- Animações suaves de mensagens
- Avatares personalizados
- Horário das mensagens
- Funcionalidade de envio com Enter

### Comandos do Bot
- `oi` / `olá` - Saudação
- `help` / `ajuda` - Ajuda
- `recursos` / `features` - Lista de recursos
- `sobre` - Informações sobre o projeto
- `contato` - Informações de contato
- `github` - Informações do repositório

## 🎨 Customização

### Alterar Cores
Edite as variáveis CSS no `:root` em `style.css`:

```css
:root {
    --primary-color: #f5f5f5;      /* Cor principal */
    --gold: #ffd700;               /* Cor dourada */
    --text-dark: #2d2d2d;          /* Cor do texto */
    /* ... outras variáveis */
}
```

### Adicionar Seções
1. Adicione nova seção no `index.html`
2. Inclua link na navegação
3. Adicione estilos correspondentes no `style.css`

### Personalizar Chat
Edite as respostas do bot na função `generateBotResponse()` em `script.js`

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Desktop**: > 768px
- **Tablet**: 768px - 480px  
- **Mobile**: < 480px

## 🔧 Desenvolvimento Local

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/RAMDUT.git

# Entre na pasta
cd RAMDUT

# Abra com um servidor local (exemplo com Python)
python -m http.server 8000

# Ou use Live Server no VS Code
# Ou simplesmente abra index.html no navegador
```

## 🚀 Deploy

### GitHub Pages (Recomendado)
1. Push para o repositório GitHub
2. Ative GitHub Pages nas configurações
3. Acesse: `https://SEU_USUARIO.github.io/RAMDUT`

### Netlify
1. Conecte seu repositório GitHub
2. Deploy automático a cada commit

### Vercel
1. Import do GitHub
2. Deploy com um clique

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

- **Email**: contato@ramdut.com
- **GitHub**: [github.com/ramdut](https://github.com/ramdut)
- **Website**: [www.ramdut.com](https://www.ramdut.com)

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🎯 Roadmap

- [ ] Sistema de autenticação
- [ ] Chat em tempo real com WebSocket
- [ ] Modo escuro/claro
- [ ] Multilinguagem
- [ ] PWA (Progressive Web App)
- [ ] Integração com APIs externas

---

**Feito com ∞ amor e muito ☕**

*"Conectando pessoas através de conversas infinitas e experiências únicas."*