import React, { useState } from "react"
import { Link } from "gatsby"
import sLogo from "../images/S-logo.png"
import topNavStyles from "./topNav.module.scss"

export default function TopNav() {
  const [showNav, setShowNav] = useState(false)

  const onBurgerClick = () => {
    setShowNav(!showNav)
  }

  const onMenuClick = () => {
    setShowNav(!showNav)
  }

  return (
    <header>
      <nav
        className={`navbar ${topNavStyles.navbar}`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className={`navbar-item ${topNavStyles.navbarItem}`} to="/">
            <img
              className={topNavStyles.logo}
              src={sLogo}
              height="28"
              alt="brand"
            />
            <p>sbhaseen.github.io</p>
          </Link>
          <button
            className={
              `navbar-burger burger ${topNavStyles.navbarBurger}` +
              (showNav ? ` is-active` : "")
            }
            aria-label="menu"
            aria-expanded="false"
            onClick={onBurgerClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div
          className={`navbar-menu` + (showNav ? `is-active` : "")}
          onClick={showNav ? onMenuClick : null}
          role="none"
        >
          <div className="navbar-end">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/blog" className="navbar-item">
              Blog
            </Link>
            <Link to="/work" className="navbar-item">
              Work
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
