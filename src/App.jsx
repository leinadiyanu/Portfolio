import { profile, projects, revisions, stack, education, certifications, otherWork, contact } from './data.js'

function Header() {
  return (
    <header>
      <div className="id"><b>D.I.A</b> / leinad</div>
      <nav>
        <a href="#work">Work</a>
        <a href="#history">History</a>
        <a href="#stack">Stack</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="tag">
        <span>DWG NO. LEINAD—001</span>
        <span>SCALE N/A · REV 07</span>
      </div>
      <h1>{profile.name} <span>/ {profile.handle}</span></h1>
      <p className="role">{profile.role}</p>
      <p className="desc">{profile.desc}</p>
      <div className="links">
        <a className="primary" href="#work">View work</a>
        <a href={contact.github.url} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <a href={`mailto:${contact.email}`}>Email</a>
      </div>
    </section>
  )
}

function ProjectSheet({ project }) {
  return (
    <div className="sheet">
      <span className="coord">{project.coord}</span>
      <div className="sheet-inner">
        <div className="sheet-top">
          <h3>{project.name}</h3>
          <span className="status">{project.status}</span>
        </div>
        <p className="role">{project.role}</p>
        <p className="desc">{project.desc}</p>
        <div className="stackline">
          {project.stack.map((s) => <span key={s}>{s}</span>)}
        </div>
        {project.link && (
          <a className="foot-link" href={project.link.url} target="_blank" rel="noopener noreferrer">
            {project.link.label} ↗
          </a>
        )}
      </div>
    </div>
  )
}

function Work() {
  return (
    <section id="work">
      <div className="section-head">
        <span className="num">01</span>
        <h2>Selected work</h2>
        <span className="count">{projects.length} PROJECTS</span>
      </div>
      {projects.map((p) => <ProjectSheet key={p.coord} project={p} />)}
    </section>
  )
}

function History() {
  return (
    <section id="history">
      <div className="section-head">
        <span className="num">02</span>
        <h2>Revision history</h2>
        <span className="count">WORK &amp; TRAINING</span>
      </div>
      <div className="bom-wrap">
        <table className="bom">
          <thead>
            <tr><th>Rev</th><th>Date</th><th>Description</th></tr>
          </thead>
          <tbody>
            {revisions.map((r) => (
              <tr key={r.rev}>
                <td className="cat">{r.rev}</td>
                <td className="note" style={{ whiteSpace: 'nowrap' }}>{r.date}</td>
                <td className="note">{r.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section id="stack">
      <div className="section-head">
        <span className="num">03</span>
        <h2>Stack</h2>
        <span className="count">BILL OF MATERIALS</span>
      </div>
      <div className="bom-wrap">
        <table className="bom">
          <thead>
            <tr><th>Item</th><th>Category</th><th>Notes</th></tr>
          </thead>
          <tbody>
            {stack.map((row) => (
              <tr key={row.item}>
                <td className="item">{row.item}</td>
                <td className="cat">{row.cat}</td>
                <td className="note">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education">
      <div className="section-head">
        <span className="num">04</span>
        <h2>Education &amp; certifications</h2>
        <span className="count">APPROVALS</span>
      </div>
      {education.map((e) => (
        <div className="sheet" key={e.label}>
          <div className="sheet-inner">
            <div className="sheet-top">
              <h3>{e.label}</h3>
            </div>
            <p className="role">{e.org}</p>
            <p className="desc">{e.note}</p>
          </div>
        </div>
      ))}
      <div className="stamps">
        {certifications.map((c) => (
          <div className="stamp" key={c}>{c}</div>
        ))}
      </div>
    </section>
  )
}

function OtherWork() {
  return (
    <section id="other">
      <div className="section-head">
        <span className="num">05</span>
        <h2>Also building</h2>
        <span className="count">{otherWork.length} MORE</span>
      </div>
      <div className="other-grid">
        {otherWork.map((o) => (
          <div className="other-item" key={o.name}>
            <h4>{o.name}</h4>
            <p>{o.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact">
      <div className="titleblock">
        <div>
          <div className="label">DRAFTED BY</div>
          <div className="value">{profile.name}</div>
        </div>
        <div>
          <div className="label">EMAIL</div>
          <div className="value"><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
        </div>
        <div>
          <div className="label">PHONE</div>
          <div className="value">{contact.phone}</div>
        </div>
        <div>
          <div className="label">GITHUB</div>
          <div className="value"><a href={contact.github.url} target="_blank" rel="noopener noreferrer">{contact.github.label}</a></div>
        </div>
        <div>
          <div className="label">LINKEDIN</div>
          <div className="value"><a href={contact.linkedin.url} target="_blank" rel="noopener noreferrer">{contact.linkedin.label}</a></div>
        </div>
        <div>
          <div className="label">LOCATION</div>
          <div className="value">{contact.location}</div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <History />
        <Stack />
        <Education />
        <OtherWork />
      </main>
      <Footer />
    </>
  )
}
