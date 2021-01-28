import React, { useEffect } from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import hljs from "highlight.js"
import "./post.scss"

export default function WorkPost({ data }) {
  const post = data.markdownRemark

  useEffect(() => {
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block)
    })
    setAllHeadingClasses()
  }, [])

  function setAllHeadingClasses() {
    const headingSizes = [1, 2, 3, 4, 5, 6]

    headingSizes.forEach(heading => {
      const h_elements = document.querySelectorAll(`h${heading.toString()}`)
      h_elements.forEach(element => {
        element.classList.add("title", `is-${heading.toString()}`)
      })
    })
  }

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <section className="section has-text-centered">
        <h1 className="title">{post.frontmatter.title}</h1>
        <h2 className="subtitle">{post.frontmatter.date}</h2>

        {post.frontmatter.tags && (
          <div className="tags is-centered">
            <span className="tag">Tags: </span>
            {post.frontmatter.tags.map((tag, i) => (
              <span className="tag is-info" key={i}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <article
          className="container has-text-left"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <Link className="button is-link" to="/work">
          Back To Work
        </Link>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`
