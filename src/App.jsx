import "./App.css";

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div>
          <p className="pill">Full Stack Developer</p>
          <h1 className="title">Johnny Telles</h1>
          <p className="subtitle">
            Java / Spring Boot • React • SQL • Docker
          </p>

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
            I build modern web apps with React and robust backends with Java/Spring.
            I like clean architecture, testing, and shipping features fast.
          </p>
        </section>

        <section className="card" id="projects">
          <h2>Projects</h2>

          <div className="grid">
            <article className="project">
              <h3>LoyaltyOS</h3>
              <p>Rewards/points system with Spring Boot + JWT + dashboards.</p>
              <div className="links">
                <a href="#" onClick={(e) => e.preventDefault()}>Code</a>
                <a href="#" onClick={(e) => e.preventDefault()}>Live</a>
              </div>
            </article>

            <article className="project">
              <h3>React Portfolio</h3>
              <p>This site built with Vite + React and deployed on GitHub Pages.</p>
              <div className="links">
                <a href="#" onClick={(e) => e.preventDefault()}>Code</a>
                <a href="#" onClick={(e) => e.preventDefault()}>Live</a>
              </div>
            </article>

            <article className="project">
              <h3>API Playground</h3>
              <p>REST API planning + endpoints tracking + testing notes.</p>
              <div className="links">
                <a href="#" onClick={(e) => e.preventDefault()}>Code</a>
                <a href="#" onClick={(e) => e.preventDefault()}>Live</a>
              </div>
            </article>
          </div>
        </section>

        <section className="card" id="contact">
          <h2>Contact</h2>
          <ul className="contact">
            <li><strong>Email:</strong> youremail@example.com</li>
            <li><strong>GitHub:</strong> <a href="https://github.com/johnnytelles77" target="_blank" rel="noreferrer">github.com/johnnytelles77</a></li>
            <li><strong>LinkedIn:</strong> <a href="#" onClick={(e) => e.preventDefault()}>Add your link</a></li>
          </ul>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Johnny Telles</p>
        </footer>
      </main>
    </div>
  );
}