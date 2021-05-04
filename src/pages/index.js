import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Skills from "../components/skills"
import BlogHighlights from "../components/blog-highlights"
import WorkHighlights from "../components/work-highlights"

export default function IndexPage() {
  useEffect(() => {
    const elementSelector = document.querySelectorAll(".card")

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("zoomIn")
          observer.unobserve(entry.target)
        }
      })
    }

    const options = {}

    const myObserver = new IntersectionObserver(callback, options)

    elementSelector.forEach(element => {
      myObserver.observe(element)
    })

    return () => {
      myObserver.disconnect()
    }
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Intro />
      <Skills />
      <BlogHighlights />
      <WorkHighlights />
    </Layout>
  )
}
