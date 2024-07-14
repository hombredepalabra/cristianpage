import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Home.css';
function Home() {
  return (
    <section id="home" className="section home">
      <div className="container home-content">
        <div className="home-text">
          <h1 className="section-title">Cristian Herrera</h1>
          <h2 className="text-muted">Back-end Developer</h2>
          <p>
          Como back-end developer, me especializo en la construcción y gestión de
          la lógica del servidor, bases de datos y APIs que soportan el funcionamiento 
          de aplicaciones web y móviles. A nivel básico, trabajo con lenguajes de programación 
          como Python, PHP y Java, y con bases de datos como MySQL y PostgreSQL.

          </p>
          <div className="cta-container">
            <a href="" className="cta-button" target="_blank">Download CV</a>
            <div className="social-links">
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="home-image">
          <img src="https://i.imgur.com/6900Hq9.png" width="300" height="300" alt="Cristian Herrera" />
        </div>
      </div>
    </section>
  );
}

export default Home;