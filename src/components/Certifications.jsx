import '../styles/Certifications.css';

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          <div className="certification-card">
            <img
              src="https://i.imgur.com/anMfTCm.png"
              width="100"
              height="100"
              alt="React Certification"
            />
            <h3>React Certification</h3>
            <p className="text-muted">
              Issued by Platzi
              <br />
              Obtained: June 2024
            </p>
          </div>
          <div className="certification-card">
            <img
              src="https://i.imgur.com/x1ZPB0w.png"
              width="100"
              height="100"
              alt="Astro Certification"
            />
            <h3>Astro Certification</h3>
            <p className="text-muted">
              Issued by Platzi
              <br />
              Obtained: April 2024
            </p>
          </div>
          <div className="certification-card">
            <img
              src="https://i.imgur.com/Vmz4nfH.png"
              width="100"
              height="100"
              alt="MySQL Certification"
            />
            <h3>MySQL Certification</h3>
            <p className="text-muted">
              Issued by Platzi
              <br />
              Obtained: February 2024
            </p>
          </div>
          <div className="certification-card">
            <img
              src="https://i.imgur.com/7RnRVEm.png"
              width="100"
              height="100"
              alt="PHP Certification"
            />
            <h3>PHP Certification</h3>
            <p className="text-muted">
              Issued by Platzi
              <br />
              Obtained: March 2024
            </p>
          </div>

          {/* Repeat for other certifications */}
        </div>
      </div>
    </section>
  );
}

export default Certifications;