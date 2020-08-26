import React from "react"
import { Link } from "gatsby"

export default function BlogHighlightsCard({ post }) {
  return (
    <div className="column">
      <div className="card">
        <div className="card-content">
          <p className="title">{post.frontmatter.title}</p>
          <p className="subtitle">{post.excerpt}</p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              <Link to={post.fields.slug}>Read More</Link>
            </span>
          </p>
        </footer>
      </div>
    </div>
  )
}
