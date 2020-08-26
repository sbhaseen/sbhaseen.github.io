import React from "react"

import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import blogListStyles from "./blog-list.module.scss"

export default function BlogList({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges

  const postData = posts.map(({ node }) => (
    <PostLink key={node.id} post={node} />
  ))

  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout>
      <SEO title="Blog" />
      <section
        className={"section has-text-centered " + blogListStyles.blogMain}
      >
        <div className="container ">
          <h1 className="title">Blog</h1>
          {postData}
        </div>
        <div className={blogListStyles.pageNavContainer}>
          <nav
            className={
              "pagination is-centered " + blogListStyles.paginationControl
            }
            role="navigation"
            aria-label="pagination"
          >
            {!isFirst && (
              <Link className="pagination-previous" to={`/blog/${prevPage}`}>
                ← Previous Page
              </Link>
            )}
            <ul className="pagination-list">
              {Array.from({ length: numPages }, (_, i) => (
                <li key={`pagination-number${i + 1}`}>
                  <Link
                    className="pagination-link"
                    to={`/blog/${i === 0 ? "" : i + 1}`}
                  >
                    {i + 1}{" "}
                  </Link>
                </li>
              ))}
            </ul>

            {!isLast && (
              <Link className="pagination-next" to={`/blog/${nextPage}`}>
                Next Page →
              </Link>
            )}
          </nav>
        </div>
      </section>
    </Layout>
  )
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
