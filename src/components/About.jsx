import '../styles/About.css';

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">Sobre mi</h2>
        <div className="about-content">
          <div className="education">
            <h3>Educación</h3>
            <div className="education-item">
              <h4>Bachillerato en ciencias</h4>
              <p className="text-muted">
                Isaac J. Barrera, Otavalo
                <br />
                Graduado: Julio 2021
              </p>
            </div>
            <div className="education-item">
              <h4>Ingenieria en TI</h4>
              <p className="text-muted">
                Universidad Técnica del Norte
                <br />
              </p>
            </div>
          </div>
          <div className="about-text">
            <p>
              Soy un desarrollador de <span className="highlight">back-end </span> con una pasión por crear aplicaciones web.
              Tengo experiencia trabajando con una variedad de tecnologías, incluyendo <span className="highlight">Python </span>, 
              <span className="highlight"> Node.js</span> y <span className="highlight"> MySQL</span>, y siempre estoy dispuesto a 
              aprender nuevas habilidades para mejorar mi oficio.


            </p>
            <p>
            En mi tiempo libre, me gusta jugar videojuegos y fútbol. También disfruto ver videos y noticias sobre los avances que 
            se van dando con estas tecnologías actualmente y contribuyendo a proyectos de código abierto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;