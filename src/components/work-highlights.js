import React from "react"
import HighlightsCard from "./highlights-card"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function WorkHighlights() {
  const data = useStaticQuery(graphql`
    query workRecent3 {
      allMarkdownRemark(
        filter: { fields: { collection: { eq: "work" } } }
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
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
        <h1 className="title">Work Highlights</h1>
        <div className="level has-text-left">
          {posts.map(({ node }) => (
            <HighlightsCard key={node.id} post={node} />
          ))}
        </div>
        <Link className="button is-link" to="/work">
          Go to Work
        </Link>
      </div>
    </section>
  )
}
