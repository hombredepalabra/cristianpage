function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          <div className="certification-card">
            <img
              src="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas.jpg"
              width="100"
              height="100"
              alt="AWS Certified Developer - Associate"
            />
            <h3>AWS Certified Developer - Associate</h3>
            <p className="text-muted">
              Issued by Amazon Web Services
              <br />
              Obtained: June 2021
            </p>
          </div>
          <div className="certification-card">
            <img
              src="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas.jpg"
              width="100"
              height="100"
              alt="AWS Certified Developer - Associate"
            />
            <h3>AWS Certified Developer - Associate</h3>
            <p className="text-muted">
              Issued by Amazon Web Services
              <br />
              Obtained: June 2021
            </p>
          </div>
          <div className="certification-card">
            <img
              src="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas.jpg"
              width="100"
              height="100"
              alt="AWS Certified Developer - Associate"
            />
            <h3>AWS Certified Developer - Associate</h3>
            <p className="text-muted">
              Issued by Amazon Web Services
              <br />
              Obtained: June 2021
            </p>
          </div>
          {/* Repeat for other certifications */}
        </div>
      </div>
    </section>
  );
}

export default Certifications;