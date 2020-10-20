import React from "react"
import SocialLinks from "./social-links"

import GitHubLogo from "../images/GitHub_logo.svg"
import GatsbyLogo from "../images/Gatsby_logo.svg"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>© Shan Bhaseen {new Date().getFullYear()}</p>
        <div className="level">
          <p className="level-item">
            Published with &nbsp;{" "}
            <a href="https://pages.github.com/" aria-label="GitHub Pages">
              <img src={GitHubLogo} alt="GitHub Logo" />
            </a>
          </p>
        </div>

        <div className="level">
          <p className="level-item">
            Built with &nbsp;{" "}
            <a href="https://www.gatsbyjs.com/" aria-label="Gatsby">
              <img src={GatsbyLogo} alt="Gatsby Logo" />
            </a>
          </p>
        </div>
      </div>
      <SocialLinks showMessage={true} />
    </footer>
  )
}
