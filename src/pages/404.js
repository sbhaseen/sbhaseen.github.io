import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">404: NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
