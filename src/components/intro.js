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
          <div className="">
            <img className={introStyles.introImage} src={profilePic} alt="" />
            <SocialLinks />
          </div>

          <div className={introStyles.introContent}>
            <h1 className="title has-text-white">Shan Bhaseen</h1>
            <h2 className="subtitle has-text-white">
              Web Developer | Technology Consultant
            </h2>
            <p>
              I'm a full stack web developer and open source advocate. I enjoy
              designing and crafting beautiful and optimized websites with the
              Jamstack. I strive for clean, efficient and well documented code.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
