import React from "react"
import Image from "./image"
import introStyles from "./intro.module.scss"
import profilePic from "../images/profile_img.jpeg"
import SocialLinks from "./social-links"

export default function Intro() {
  return (
    <section className={`hero is-fullheight ${introStyles.hero}`}>
      <Image />
      <div className={`hero-body ${introStyles.heroBody}`}>
        <div className={introStyles.introContainer}>
          <div>
            <img
              className={`${introStyles.introImage} zoomIn`}
              src={profilePic}
              alt=""
            />
            <SocialLinks />
          </div>

          <div className={`${introStyles.introContent} fadeInDown`}>
            <h1 className="title has-text-white">Shan Bhaseen</h1>
            <h2 className="subtitle has-text-white">
              Web Developer | Technology Consultant
            </h2>
            <p>
              I'm a web developer and open source advocate. I enjoy working on
              the front end and have also worked full stack. Expereinced with
              JavaScript, TypeScript and Python. I strive for clean, efficient
              and well documented code.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
