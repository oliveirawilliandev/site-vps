import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-page-container">
      <div className="about-page-title-row">
        <Link to="/" className="about-page-back-button">
          <i className="fas fa-arrow-left"></i>
        </Link>
        <h1>Sobre Mim</h1>
      </div>

      <div className="about-page-content">
        {/* Seção de Perfil */}
        <div className="about-page-profile-section">
          <div className="about-page-profile-image">
            <img src="https://raw.githubusercontent.com/oliveirawilliandev/img/refs/heads/main/foto.png" alt="Willian Oliveira" />
          </div>
          <h2 className="about-page-profile-name">Willian Ferreira de Oliveira</h2>
          <p className="about-page-age-location">
            <i className="fas fa-calendar"></i> 28 anos &nbsp;|&nbsp;
            <i className="fas fa-map-marker-alt"></i> Blumenau, Santa Catarina - Brasil
          </p>
          <p className="about-page-role">Back-End Developer Java | Desenvolvedor Back-End Java</p>
          <div className="about-page-social-links">
            <a href="mailto:oliveira.willian.dev@gmail.com" className="about-page-social-link">
              <i className="fas fa-envelope"></i> Email
            </a>
            <a href="https://github.com/oliveirawilliandev" target="_blank" rel="noreferrer" className="about-page-social-link">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/oliveirawilliandev/" target="_blank" rel="noreferrer" className="about-page-social-link">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>

        {/* Grid de Informações Principais */}
        <div className="about-page-info-grid">
          <div className="about-page-info-card">
            <i className="fas fa-graduation-cap"></i>
            <h3>Academic | Formação</h3>
            <p><strong>Analysis and Systems Development</strong><br />Análise e Desenvolvimento de Sistemas</p>
            <p className="about-page-institution">UniCesumar - Universidade de Blumenau</p>
            <p><strong>Software Engineering</strong><br />Engenharia de Software (Cursando)</p>
          </div>

          <div className="about-page-info-card">
            <i className="fas fa-briefcase"></i>
            <h3>Experience | Experiência</h3>
            <div className="about-page-experience-item">
              <strong>Metalúrgica Weg</strong>
              <span className="about-page-period">2 anos</span>
              <p className="about-page-exp-description">Experiência no setor industrial</p>
            </div>
            <div className="about-page-experience-item">
              <strong>Gráfica Carton Druck</strong>
              <span className="about-page-period">6 anos</span>
              <p className="about-page-exp-description">Experiência no setor gráfico</p>
            </div>
          </div>

          <div className="about-page-info-card">
            <i className="fas fa-code"></i>
            <h3>Courses | Cursos</h3>
            <div className="about-page-course-item">
              <strong>Java COMPLETO - Programação Orientada a Objetos</strong>
              <p className="about-page-instructor">Prof. Nélio Alves</p>
              <span className="about-page-year">2023</span>
            </div>
            <div className="about-page-course-item">
              <strong>Spring Boot - Swagger, Docker, Kubernetes, JWT, JUnit, Mockito, React, AWS e GCP</strong>
              <p className="about-page-instructor">Erudio</p>
              <span className="about-page-year">2024</span>
            </div>
          </div>

          <div className="about-page-info-card">
            <i className="fas fa-heart"></i>
            <h3>ERP Oliveira</h3>
            <p>Sistema ERP completo para gestão empresarial.<br />Complete ERP system for business management.</p>
            <p className="about-page-version">Version | Versão: 1.0.0</p>
          </div>
        </div>

        {/* Cursos Profissionalizantes */}
        <div className="about-page-professional-courses-section">
          <h3><i className="fas fa-award"></i> Professional Courses | Cursos Profissionalizantes</h3>
          <div className="about-page-professional-courses-grid">
            <div className="about-page-professional-course-card">
              <div className="about-page-professional-course-header">
                <span className="about-page-course-icon">💻</span>
                <div className="about-page-professional-course-title">
                  <h4>Aprendizagem Industrial em Informática</h4>
                  <p className="about-page-professional-institution">SENAI/SC - Blumenau | 2014</p>
                </div>
              </div>
              <div className="about-page-professional-course-modules">
                <p className="about-page-modules-title"><i className="fas fa-check-circle"></i> Modules | Módulos:</p>
                <div className="about-page-modules-grid">
                  <span className="about-page-module-tag">Conceitos de Bancos de Dados</span>
                  <span className="about-page-module-tag">Conceitos de Programação</span>
                  <span className="about-page-module-tag">Desenvolvimento de Páginas de Internet</span>
                  <span className="about-page-module-tag">Montagem e Manutenção de Computadores</span>
                  <span className="about-page-module-tag">Introdução a Redes de Computadores</span>
                </div>
              </div>
            </div>
            <div className="about-page-professional-course-card">
              <div className="about-page-professional-course-header">
                <span className="about-page-course-icon">☕</span>
                <div className="about-page-professional-course-title">
                  <h4>Desenvolvedor Back-end - Java</h4>
                  <p className="about-page-professional-institution">SENAI/SC em parceria com Entra21 | 2024</p>
                </div>
              </div>
              <div className="about-page-professional-course-modules">
                <p className="about-page-modules-title"><i className="fas fa-check-circle"></i> Modules | Módulos:</p>
                <div className="about-page-modules-grid">
                  <span className="about-page-module-tag">Módulo Básico</span>
                  <span className="about-page-module-tag">Módulo Complementar</span>
                  <span className="about-page-module-tag">Módulo Específico</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disciplinas Cursadas */}
        <div className="about-page-disciplines-section">
          <h3><i className="fas fa-book-open"></i> Academic Disciplines | Analysis and Systems Development</h3>
          <div className="about-page-disciplines-grid">
            <div className="about-page-discipline-card"><h4>1ª Série</h4><ul><li>ENGENHARIA DE SOFTWARE</li></ul></div>
            <div className="about-page-discipline-card"><h4>2ª Série</h4><ul><li>Algoritmos e Lógica de Programação</li><li>Linguagem e Técnicas de Programação</li></ul></div>
            <div className="about-page-discipline-card"><h4>3ª Série</h4><ul><li>Fundamentos e Arquitetura de Computadores</li><li>Redes de Computadores</li></ul></div>
            <div className="about-page-discipline-card"><h4>4ª Série</h4><ul><li>GO - Projeto de Vida</li><li>Matemática Aplicada à Computação</li></ul></div>
            <div className="about-page-discipline-card"><h4>5ª Série</h4><ul><li>Banco de Dados</li><li>Sistemas Operacionais</li></ul></div>
            <div className="about-page-discipline-card"><h4>6ª Série</h4><ul><li>Gestão de Projetos Tecnológicos</li><li>Programação Orientada a Objetos</li></ul></div>
            <div className="about-page-discipline-card"><h4>7ª Série</h4><ul><li>Análise e Projeto Orientado a Objetos</li></ul></div>
            <div className="about-page-discipline-card"><h4>8ª Série</h4><ul><li>Estruturas de Dados</li><li>Programação Front End</li></ul></div>
            <div className="about-page-discipline-card"><h4>9ª Série</h4><ul><li>Estruturas, Pesquisa e Ordenação de Dados</li><li>Imersão Profissional</li><li>Interface Humano-Computador</li></ul></div>
            <div className="about-page-discipline-card"><h4>10ª Série</h4><ul><li>Programação Avançada</li><li>Programação para Dispositivos Móveis</li></ul></div>
          </div>
        </div>

        {/* Tecnologias */}
        <div className="about-page-tech-section">
          <h3><i className="fas fa-server"></i> Backend Technologies | Tecnologias Backend</h3>
          <div className="about-page-tech-stack">
            <span className="about-page-tech-tag about-page-tech-tag-backend">Java 17+</span>
            <span className="about-page-tech-tag about-page-tech-tag-backend">Spring Boot</span>
            <span className="about-page-tech-tag about-page-tech-tag-backend">Spring Security</span>
            <span className="about-page-tech-tag about-page-tech-tag-backend">Spring Data JPA</span>
            <span className="about-page-tech-tag about-page-tech-tag-backend">Hibernate</span>
            <span className="about-page-tech-tag about-page-tech-tag-backend">JWT</span>
            <span className="about-page-tech-tag about-page-tech-tag-backend">JasperReports</span>
            <span className="about-page-tech-tag about-page-tech-tag-backend">JUnit 5</span>
            <span className="about-page-tech-tag about-page-tech-tag-backend">RESTful API</span>
            <span className="about-page-tech-tag about-page-tech-tag-backend">Maven</span>
          </div>
        </div>

        <div className="about-page-tech-section">
          <h3><i className="fas fa-cloud"></i> DevOps & Infrastructure | DevOps e Infraestrutura</h3>
          <div className="about-page-tech-stack">
            <span className="about-page-tech-tag about-page-tech-tag-devops">Docker</span>
            <span className="about-page-tech-tag about-page-tech-tag-devops">PostgreSQL</span>
            <span className="about-page-tech-tag about-page-tech-tag-devops">Git</span>
            <span className="about-page-tech-tag about-page-tech-tag-devops">GitHub Actions</span>
          </div>
        </div>

        {/* Sobre o Projeto */}
        <div className="about-page-project-info">
          <i className="fas fa-chart-line"></i>
          <h3>About the Project | Sobre o Projeto</h3>
          <p>
            Este sistema ERP foi desenvolvido com arquitetura moderna e escalável,
            utilizando Java Spring Boot no backend e React no frontend.
            Inclui operações CRUD completas, autenticação JWT,
            importação/exportação de arquivos (CSV, XLSX, PDF), integração com JasperReports
            e suporte completo a HATEOAS.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;