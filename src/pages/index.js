import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Skills from "../components/skills"
import BlogHighlights from "../components/blog-highlights"
import WorkHighlights from "../components/work-highlights"

export default function IndexPage() {
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
