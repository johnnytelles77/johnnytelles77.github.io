import "./App.css";
import { projects } from "./data/projects";

const skillGroups = [
  {
    title: "Backend Development",
    skills: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Node.js",
      "Express.js",
    ],
  },
  {
    title: "Security & Authentication",
    skills: [
      "JWT",
      "Role-Based Access Control",
      "OAuth 2.0",
      "Passport.js",
      "BCrypt",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Mongoose",
      "Flyway",
      "Relational Database Design",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Axios",
    ],
  },
  {
    title: "Testing & DevOps",
    skills: [
      "JUnit 5",
      "Mockito",
      "MockMvc",
      "Postman",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "Git",
      "Maven",
      "Swagger / OpenAPI",
    ],
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div>
          <p className="pill">
            Java Backend Developer | Full-Stack Development
          </p>

          <h1 className="title">Johnny Telles</h1>

          <p className="subtitle">
            Java 21 • Spring Boot • REST APIs • Spring Security •
            PostgreSQL • React • Next.js • Docker
          </p>

          <div className="actions">
            <a
              className="btn primary"
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>

            <a className="btn" href="#projects">
              View Projects
            </a>

            <a className="btn" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="card" id="about">
          <h2>About Me</h2>

          <p>
            Java Backend Developer focused on building secure,
            maintainable REST APIs and backend applications using
            Java 21, Spring Boot, and Spring Security.
          </p>

          <p>
            Hands-on experience developing banking systems,
            customer loyalty platforms, and Node.js APIs,
            including authentication, database persistence,
            transactional business logic, automated testing,
            and continuous integration.
          </p>

          <p>
            I also work with React, Next.js, and TypeScript
            to integrate backend services with modern web
            interfaces. Bilingual in English and Spanish,
            with a strong interest in backend engineering,
            software architecture, and remote collaboration.
          </p>
        </section>

        <section className="card" id="skills">
          <h2>Technical Skills</h2>

          {skillGroups.map((group) => (
            <div className="skills-group" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skills">
                {group.skills.map((skill) => (
                  <span className="skill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="card" id="projects">
          <h2>Featured Projects</h2>

          <div className="grid">
            {projects.map((project) => (
              <article key={project.title} className="project">
                <h3>{project.title}</h3>

                <p className="muted">{project.subtitle}</p>

                <p>{project.description}</p>

                <div className="tech">
                  {project.tech.map((technology) => (
                    <span className="badge" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <ul className="highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="card" id="contact">
          <h2>Contact</h2>

          <p>
            Interested in backend development,
            full-stack applications, and opportunities
            to collaborate on software projects.
          </p>

          <ul className="contact">
            <li>
              <strong>Email: </strong>
              <a href="mailto:johnnytelles77@gmail.com">
                johnnytelles77@gmail.com
              </a>
            </li>

            <li>
              <strong>GitHub: </strong>
              <a
                href="https://github.com/johnnytelles77"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/johnnytelles77
              </a>
            </li>

            <li>
              <strong>LinkedIn: </strong>
              <a
                href="https://linkedin.com/in/johnny-telles-72024b284"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </section>

        <footer className="footer">
          <p>
            © {new Date().getFullYear()} Johnny Telles.
            Built with React and Vite.
          </p>
        </footer>
      </main>
    </div>
  );
}