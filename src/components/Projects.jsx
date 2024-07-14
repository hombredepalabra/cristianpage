import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Mis proyectos</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="https://i.imgur.com/qYCBkwb.png" alt="Real time chat" className="project-image" />
            <div className="project-card-content">
              <h3>Gestión de Matriculas</h3>
              <p className="text-muted">
              Una aplicación web para registrar estudiantes y docentes, gestionar matriculas.
              </p>
              <br />
              <div className="project-links">
                <a href="" className="btn btn-primary">Sitio</a>
                <a href="" className="btn btn-secondary">Codigo</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src="https://i.imgur.com/PrVxkXl.png" alt="Menu" className="project-image" />
            <div className="project-card-content">
              <h3>API para Biblioteca</h3>
              <p className="text-muted">
              Un sistema API RESTful para una biblioteca que permite gestionar libros y autores.
              </p>
              <br />
              <div className="project-links">
                <a href="" className="btn btn-primary">Sitio</a>
                <a href="" className="btn btn-secondary">codigo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;