function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="education">
            <h3>Education</h3>
            <div className="education-item">
              <h4>Bachelor of Science in Computer Science</h4>
              <p className="text-muted">
                Diez de Agosto Highschol, Otavalo
                <br />
                Graduated: May 2018
              </p>
            </div>
            <div className="education-item">
              <h4>Information technology engineer</h4>
              <p className="text-muted">
                UTN University
                <br />
              </p>
            </div>
          </div>
          <div className="about-text">
            <p>
              I am a full-stack developer with a passion for creating intuitive and user-friendly web
              applications. I have experience working with a variety of technologies, including React, Node.js,
              and MongoDB, and I&apos;m always eager to learn new skills to improve my craft.
            </p>
            <p>
              In my free time, I enjoy exploring the great outdoors, reading about the latest advancements in
              technology, and contributing to open-source projects. I&apos;m also an avid learner and enjoy taking
              online courses to expand my knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;