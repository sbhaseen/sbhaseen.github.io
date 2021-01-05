import React from "react"
import skillsStyles from "./skills.module.scss"

export default function Skills() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">Skills</h1>
        <div className="tile is-ancestor">
          <div className={`tile is-parent ${skillsStyles.magnifyBox}`}>
            <article
              className={`tile is-child box ${skillsStyles.specHighlight}`}
            >
              <p className="title">Main Programming Languages</p>
              <p className="subtitle">Most Used (Proficient)</p>
              <div className="content">
                <ul>
                  <li>JavaScript</li>
                  <li>Python</li>
                </ul>
              </div>
            </article>
          </div>
          <div className={`tile is-parent ${skillsStyles.magnifyBox}`}>
            <article
              className={`tile is-child box ${skillsStyles.specHighlight} ${skillsStyles.yellow}`}
            >
              <p className="title">Other Programming Languages</p>
              <p className="subtitle">Working Knowledge (Familar)</p>
              <div className="content">
                <ul>
                  <li>TypeScript</li>
                  <li>C#</li>
                </ul>
              </div>
            </article>
          </div>
          <div className={`tile is-parent ${skillsStyles.magnifyBox}`}>
            <article
              className={`tile is-child box ${skillsStyles.specHighlight} ${skillsStyles.blue}`}
            >
              <p className="title">Databases</p>
              <p className="subtitle">Relational &#38; Non-relational</p>
              <div className="content">
                <ul>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </article>
          </div>
        </div>

        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className={`tile is-child box ${skillsStyles.magnifyBox}`}>
              <p className="title">Libraries &#38; Frameworks</p>
              <p className="subtitle">Frequently Used</p>
              <div className="content">
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>React</li>
                  <li>Angular</li>
                  <li>Django</li>
                  <li>Flask</li>
                </ul>
              </div>
            </article>
          </div>

          <div className="tile is-parent is-vertical">
            <article className={`tile is-child box ${skillsStyles.magnifyBox}`}>
              <p className="title">Developer Tools</p>
              <p className="subtitle">Commonly Used</p>
              <div className="content">
                <ul>
                  <li>Bash</li>
                  <li>Git</li>
                  <li>VS Code</li>
                </ul>
              </div>
            </article>
            <article className={`tile is-child box ${skillsStyles.magnifyBox}`}>
              <p className="title">Hobby Stuff</p>
              <p className="subtitle">For fun</p>
              <div className="content">
                <ul>
                  <li>Arduino</li>
                  <li>Unity Game Engine</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
