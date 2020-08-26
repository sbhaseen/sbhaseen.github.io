import React from "react"
import BlogHighlightsCard from "./blog-highlights-card"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function BlogHighlights() {
  const data = useStaticQuery(graphql`
    query blogRecent3 {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
      ) {
        edges {
          node {
            fields {
              slug
            }
            id
            excerpt(pruneLength: 125)
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges

  return (
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title">Blog Highlights</h1>
        <h2 className="subtitle">Some recent posts</h2>
        <div className="level has-text-left">
          {posts.map(({ node }) => (
            <BlogHighlightsCard key={node.id} post={node} />
          ))}
        </div>
        <Link className="button is-link" to="/blog">
          Go to Blog
        </Link>
      </div>
    </section>
  )
}
