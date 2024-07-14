import '../styles/Certifications.css';

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Certificados</h2>
        <div className="certifications-grid">
          <div className="certification-card">
            <img
              src="https://i.imgur.com/V1vJfme.png"
              width="100"
              height="100"
              alt="TypeScript"
            />
            <h3>TypeScript</h3>
            <p className="text-muted">
              
              <br />
              
            </p>
          </div>
          <div className="certification-card">
            <img
              src="https://i.imgur.com/mAJzP3O.png"
              width="100"
              height="100"
              alt="Python"
            />
            <h3>Python</h3>
            <p className="text-muted">
              
              <br />r
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;