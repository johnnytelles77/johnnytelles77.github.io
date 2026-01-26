import "./App.css";
import { projects } from "./data/projects";

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div>
          <p className="pill">Full Stack Developer</p>
          <h1 className="title">Johnny Telles</h1>
          <p className="subtitle">Java / Spring Boot • React • SQL • Docker</p>

          <div className="actions">
            <a className="btn primary" href="/CV.pdf" target="_blank" rel="noreferrer">
              View CV
            </a>
            <a className="btn" href="#projects">Projects</a>
            <a className="btn" href="#contact">Contact</a>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="card" id="about">
  <h2>About</h2>
  <p>
    Full Stack Developer specialized in Java and JavaScript, with hands-on
    experience building secure backend systems and modern web applications.
  </p>
  <p>
    Strong background in Spring Boot, REST APIs, JWT authentication, database
    design, and automated testing. Comfortable working with React and Next.js
    on the frontend.
  </p>
  <p>
    Bilingual (English / Spanish), experienced in remote collaboration and
    building production-ready applications end to end.
  </p>
</section>

<section className="card" id="skills">
  <h2>Skills</h2>

  <div className="skills-group">
    <h3>Backend</h3>
    <div className="skills">
      <span className="skill">Java 21</span>
      <span className="skill">Spring Boot</span>
      <span className="skill">Spring Security</span>
      <span className="skill">REST APIs</span>
      <span className="skill">JWT</span>
      <span className="skill">Node.js</span>
      <span className="skill">Express</span>
    </div>
  </div>

  <div className="skills-group">
    <h3>Databases</h3>
    <div className="skills">
      <span className="skill">MySQL</span>
      <span className="skill">MongoDB</span>
      <span className="skill">Mongoose</span>
      <span className="skill">Indexing</span>
      <span className="skill">Schema Design</span>
    </div>
  </div>

  <div className="skills-group">
    <h3>Frontend</h3>
    <div className="skills">
      <span className="skill">React</span>
      <span className="skill">Next.js</span>
      <span className="skill">JavaScript</span>
      <span className="skill">HTML</span>
      <span className="skill">CSS</span>
      <span className="skill">Vite</span>
    </div>
  </div>

  <div className="skills-group">
    <h3>Testing & DevOps</h3>
    <div className="skills">
      <span className="skill">JUnit</span>
      <span className="skill">Mockito</span>
      <span className="skill">Mocha</span>
      <span className="skill">Chai</span>
      <span className="skill">Docker</span>
      <span className="skill">GitHub Actions</span>
    </div>
  </div>
</section>

        <section className="card" id="projects">
          <h2>Projects</h2>

          <div className="grid">
            {projects.map((project) => (
              <article key={project.title} className="project">
                <h3>{project.title}</h3>
                <p className="muted">{project.subtitle}</p>

                <p>{project.description}</p>

                <div className="tech">
                  {project.tech.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>

                <ul className="highlights">
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="links">
                  <a href={project.github} target="_blank" rel="noreferrer">Code</a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">Live</a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="card" id="contact">
          <h2>Contact</h2>
          <ul className="contact">
            <li><strong>Email:</strong> johnnytelles77@gmail.com</li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/johnnytelles77" target="_blank" rel="noreferrer">
                github.com/johnnytelles77
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://linkedin.com/in/johnny-telles-72024b284" target="_blank" rel="noreferrer">
                linkedin.com/in/johnny-telles-72024b284
              </a>
            </li>
          </ul>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Johnny Telles</p>
        </footer>
      </main>
    </div>
  );
}