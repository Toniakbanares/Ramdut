`const { useState } = React;

// Componente principal
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">RAMDUT</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-gray-700">
            <a href="#about" className="hover:text-primary transition">Sobre</a>
            <a href="#services" className="hover:text-primary transition">Serviços</a>
            <a href="#projects" className="hover:text-primary transition">Projetos</a>
            <a href="#contact" className="hover:text-primary transition">Contato</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white px-4 py-2 space-y-2 text-gray-700 border-t">
            <a href="#about" className="block hover:text-primary transition" onClick={() => setMenuOpen(false)}>Sobre</a>
            <a href="#services" className="block hover:text-primary transition" onClick={() => setMenuOpen(false)}>Serviços</a>
            <a href="#projects" className="block hover:text-primary transition" onClick={() => setMenuOpen(false)}>Projetos</a>
            <a href="#contact" className="block hover:text-primary transition" onClick={() => setMenuOpen(false)}>Contato</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="flex-grow bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">Olá, eu sou <span className="text-primary">JaquesRD</span></h2>
            <p className="text-lg text-gray-700 mb-6">Programador Full Stack & Engenheiro de Prompts especializado em soluções criativas e escaláveis.</p>
            <div className="flex space-x-4">
              <a href="#contact" className="px-6 py-3 bg-primary text-white rounded-full hover:bg-opacity-90 transition">Fale Comigo</a>
              <a href="#projects" className="px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition">Ver Projetos</a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="https://placehold.co/400x400/1E90FF/FFFFFF?text=JaquesRD" alt="Perfil" className="rounded-full w-64 h-64 object-cover shadow-xl" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Sobre Mim</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Desenvolvedor full stack apaixonado por tecnologia e inovação. Trabalho com desenvolvimento web, automação, IA generativa e engenharia de prompts.
            Transformo ideias em realidade através de código limpo e eficiente.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">O Que Eu Faço</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2">Desenvolvimento Web</h4>
              <p className="text-gray-600">Frontend e backend escalável com React, Node.js, Python e mais.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2">Engenharia de Prompts</h4>
              <p className="text-gray-600">Criação de prompts avançados para LLMs e automações inteligentes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2">Automação & IA</h4>
              <p className="text-gray-600">Soluções personalizadas para otimizar processos com IA e scripts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Meus Projetos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard title="PromptFlow" description="Editor visual para construção de fluxos de prompts com integração de IA." />
            <ProjectCard title="AutoDev" description="Sistema de automação de tarefas repetitivas com scripts inteligentes." />
            <ProjectCard title="SmartResume" description="Gerador de currículo interativo com análise de dados profissionais." />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Vamos Conversar?</h3>
          <p className="max-w-xl mx-auto text-gray-600 mb-8">
            Estou sempre aberto a novos projetos e colaborações. Entre em contato!
          </p>
          <a href="mailto:jasu.sn@hotmail.com" className="inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-opacity-90 transition">Enviar Email</a>
        </div>
      </section>

      {/* Social Icons Footer */}
      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Redes Sociais</p>
          <div className="flex justify-center space-x-4">
            <SocialIcon href=" https://linkedin.com/in/jaques-dutra-14b805226 " icon={<LinkedInIcon />} />
            <SocialIcon href="https://github.com/JaquesRD " icon={<GitHubIcon />} />
            <SocialIcon href="https://instagram.com/strklife " icon={<InstagramIcon />} />
            <SocialIcon href="https://facebook.com/share/1C8XCz8wxk/ " icon={<FacebookIcon />} />
            <SocialIcon href="https://x.com/jasu_sn " icon={<TwitterIcon />} />
            <SocialIcon href="https://tiktok.com/ @strklife" icon={<TikTokIcon />} />
          </div>
        </div>
      </footer>
    </div>
  );
}

// Componentes reutilizáveis

function ProjectCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary text-2xl transition">
      {icon}
    </a>
  );
}

// Ícones SVG customizados

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.962 0-1.74-.79-1.74-1.764s.778-1.764 1.74-1.764 1.74.79 1.74 1.764-.778 1.764-1.74 1.764zm13.5 12.268h-3v-5.604c0-3.368-4.032-3.103-4.032 0v5.604h-3v-11h3v1.765c1.276-2.543 5.863-2.969 6.0 0v-1.765h3v11z"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.087-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.064 9.646c1.523 0 2.759 1.235 2.759 2.759s-1.235 2.759-2.759 2.759-2.759-1.235-2.759-2.759 1.235-2.759 2.759-2.759zm-9.82 5.37c.795 1.245 2.22 2.123 3.758 2.123h.01c1.543 0 2.968-.878 3.758-2.124 1.273-.245 2.455-1.272 2.455-2.713 0-1.542-1.235-2.758-2.758-2.758-1.524 0-2.759 1.217-2.759 2.758 0 1.442 1.182 2.468 2.456 2.713-.27.435-.615.816-1.02 1.11-.794.576-1.836.91-2.938.91-2.208 0-4-1.792-4-4 0-2.209 1.792-4 4-4s4 1.791 4 4c0 .416-.075.817-.21 1.195-.355-.485-.832-.893-1.392-1.195-.925-.505-2.06-.785-3.27-.785-3.313 0-6 2.687-6 6s2.687 6 6 6c2.69 0 4.922-1.73 5.723-4.087l-1.204-.445c-.636 1.89-2.48 3.233-4.519 3.233-2.762 0-5-2.238-5-5s2.238-5 5-5c1.513 0 2.865.653 3.806 1.71l1.127-1.49c-.994-1.32-2.558-2.22-4.306-2.22-3.314 0-6 2.686-6 6s2.686 6 6 6c2.69 0 4.922-1.73 5.723-4.087l-1.204-.445c-.636 1.89-2.48 3.233-4.519 3.233-2.762 0-5-2.238-5-5s2.238-5 5-5c1.513 0 2.865.653 3.806 1.71l1.127-1.49c-.994-1.32-2.558-2.22-4.306-2.22-3.314 0 0 0 0 0z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.917.417-1.333 1.667-1.333h2.333v-5h-3.333c-2.75 0-4 1.25-4 4v3z"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.19 2.7 1.67 4.24 1.55v4.03c-1.83-.04-3.64-.75-5.07-1.91-.57-.46-1.06-1.03-1.39-1.69-.63 1.87-.72 3.94-.13 5.84.03.1.04.22.1.31.14.22.34.38.54.54l-.01 5.66c-.81.04-1.62.05-2.43.02-.07-.01-.14-.03-.21-.05-.14-.06-.27-.14-.38-.25-.22-.22-.35-.5-.33-.79-.02-2.98-.01-5.95-.02-8.93-.01-.38.14-.72.39-.96.25-.24.59-.37.96-.38 1.04-.02 2.08-.02 3.12-.01.09.01.17.03.25.05.04.03.07.06.1.1.04-.02.07-.05.11-.07h.02c1.91-.02 3.81-.01 5.72-.02.3 0 .59.22.67.52.07.3.01.61-.2.81-.21.21-.53.27-.83.19-1.56-.43-3.03-.76-4.19-1.86-.56-.52-.82-1.14-.95-1.82-.02-.1-.02-.21-.04-.31-.03-.27-.18-.52-.42-.68-.18-.12-.39-.18-.6-.19-.62-.03-1.25-.02-1.87-.02zm-5.02 14.14c.64.03 1.29.04 1.93.02.14-.01.28-.03.41-.08.27-.1.46-.32.52-.61.06-.29-.02-.59-.22-.81-.18-.19-.43-.29-.69-.31-.64-.05-1.28-.03-1.92-.04-.05 0-.1-.02-.15-.02-.31-.02-.56.18-.63.49-.06.25-.02.51.09.74.11.23.28.4.5.49.11.04.23.09.34.1.59.03 1.18.03 1.77.04z"/>
    </svg>
  );
}

// Renderiza o componente no DOM
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
