import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <div className="avatar">
            <img 
              src="/assets/minha-foto.jpg" 
              alt="Willian Oliveira" 
              className="avatar-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://ui-avatars.com/api/?name=Willian+Oliveira&background=667eea&color=fff&size=100';
              }}
            />
          </div>
          <h1 className="hero-name">Willian Oliveira</h1>
          <p className="hero-description">
            Desenvolvedor Back-End | Java | Spring Boot | React
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Projeto Card */}
        <div className="card card-project">
          <div className="card-icon">📦</div>
          <h2 className="card-title">Projeto ERP Oliveira</h2>
          <p className="card-text">
            Sistema completo para gestão empresarial com módulos de cadastro, 
            vendas, estoque, financeiro e relatórios. API RESTful com Spring Boot 
            e frontend moderno em React.
          </p>
          <a href="/erp" className="card-btn">Acessar Projeto →</a>
        </div>

        {/* Sobre Card */}
        <div className="card card-about">
          <div className="card-icon">👤</div>
          <h2 className="card-title">Sobre Mim</h2>
          <p className="card-text">
            Willian Ferreira de Oliveira - Especialista em back-end Java e Spring Boot, 
            com experiência em bancos Oracle, PostgreSQL e containerização com Docker. 
            Focado em soluções escaláveis.
          </p>
          <a href="/about" className="card-btn">Conhecer Mais →</a>
        </div>

        {/* Tech Stack */}
        <div className="tech-section">
          <h3 className="tech-section-title">Tech Skills</h3>
          <div className="tech-list">
            <span className="tech-item">Java 17+</span>
            <span className="tech-item">Spring Boot</span>
            <span className="tech-item">Oracle</span>
            <span className="tech-item">PostgreSQL</span>
            <span className="tech-item">Docker</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="home-footer">
        <p>© 2026 Willian Ferreira de Oliveira</p>
      </footer>
    </div>
  );
}

export default Home;