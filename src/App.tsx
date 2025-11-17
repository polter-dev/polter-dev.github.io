import headshot from '../img/headshot.jpg'
import './App.css'

const projectSlots = Array.from({ length: 3 })

function App() {
  return (
    <>
      <nav className="toc" aria-label="Table of contents">
        <a href="/" aria-current="page">
          Home
        </a>
        <a href="/github.html">Github</a>
        <a href="/about.html">About Me</a>
        <a href="/resume.html">Resume</a>
        <a href="/contact.html">Contact</a>
      </nav>

      <div className="page">
      <header className="hero" aria-labelledby="intro-title">
        <div className="hero-content">
          <p className="eyebrow">Aspiring software engineer</p>
          <h1 id="intro-title">
            Learning to build reliable systems, one project at a time.
          </h1>
          <p className="lede">
            Early-career software engineer focused on learning backend systems, automation, and clean code practices.
            Building this space to document the journey and find teams willing to mentor a motivated intern.
          </p>
          <div className="hero-skills">
            <span className="hero-skills-label">Technical skills:</span>
            <div className="hero-skills-tags">
              <span>C</span>
              <span>C++</span>
              <span>Java</span>
              <span>AWS</span>
            </div>
          </div>
          <div className="hero-actions">
            <a className="ghost-link" href="#work">
              View work
            </a>
            <a className="ghost-link" href="https://www.linkedin.com/in/marcusruth/" target="_blank" rel="noreferrer">
              Connect
            </a>
          </div>
        </div>

        <figure className="hero-photo">
          <img src={headshot} alt="Marcus — Computer Science Student at the University of Central Florida" loading="lazy" />
        </figure>
      </header>


      <section className="projects" id="work" aria-label="Selected projects">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Upcoming Projects</h2>
        </div>
        <div className="project-grid">
          <article className="project-card">
            <header className="project-meta">
              <span>2025</span>
              <a className="project-link" href="https://github.com/polter-dev/miniredis_cpp" target="_blank" rel="noreferrer">
                Mini Redis in C++
              </a>
            </header>
            <p>
              Building a Mini Redis clone to grow C++ skills — manual networking, memory management, and the discipline
              to implement core commands from scratch.
            </p>
            <ul className="tag-list">
              <li>C++</li>
              <li>Networking</li>
              <li>Systems</li>
            </ul>
          </article>

          {projectSlots.slice(0, 2).map((_, index) => (
            <article key={index} className="project-card project-card--empty">
              <header className="project-meta">
                <span>Upcoming</span>
                <span className="project-link muted">Project {index + 2}</span>
              </header>
              <p className="placeholder-copy">Project details coming soon.</p>
              <ul className="tag-list muted">
                <li>In progress</li>
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Actively seeking SWE internships</p>
          <h2 id="contact-title">Learning fast, ready to contribute with guidance.</h2>
        </div>
        <div className="contact-details">
          
          <a href="mailto:marcusruth2003@gmail.com"><em><u>Email Me!</u></em></a>
          <p>
            I’m still building foundational projects and would love to grow inside a team willing to mentor an
            intern/junior engineer.
          </p>
        </div>
      </section>
      </div>
    </>
  )
}

export default App
