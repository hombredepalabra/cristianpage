function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas.jpg" alt="Project 1" className="project-image" />
            <div className="project-card-content">
              <h3>Project 1</h3>
              <p className="text-muted">
                A full-stack web application built with React, Node.js, and MongoDB.
              </p>
              <div className="project-links">
                <a href="#" className="btn btn-primary">Live Site</a>
                <a href="#" className="btn btn-secondary">Source Code</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas.jpg" alt="Project 1" className="project-image" />
            <div className="project-card-content">
              <h3>Project 1</h3>
              <p className="text-muted">
                A full-stack web application built with React, Node.js, and MongoDB.
              </p>
              <div className="project-links">
                <a href="#" className="btn btn-primary">Live Site</a>
                <a href="#" className="btn btn-secondary">Source Code</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas.jpg" alt="Project 1" className="project-image" />
            <div className="project-card-content">
              <h3>Project 1</h3>
              <p className="text-muted">
                A full-stack web application built with React, Node.js, and MongoDB.
              </p>
              <div className="project-links">
                <a href="#" className="btn btn-primary">Live Site</a>
                <a href="#" className="btn btn-secondary">Source Code</a>
              </div>
            </div>
          </div>
          {/* Repeat for other projects */}
        </div>
      </div>
    </section>
  );
}

export default Projects;