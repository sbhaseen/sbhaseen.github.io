import React from "react"
import { Link } from "gatsby"
import postLinkStyles from "./post-link.module.scss"

export default function PostLink({ post }) {
  return (
    <div className={postLinkStyles.linkContainer}>
      <Link className={postLinkStyles.linkTitle} to={post.fields.slug}>
        {post.frontmatter.title}
      </Link>
      <p className={postLinkStyles.excerpt}>{post.excerpt && post.excerpt}</p>
    </div>
  )
}
