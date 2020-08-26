/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import TopNav from "./topNav"
import Footer from "./footer"
import "./layout.scss"

export default function Layout({ children }) {
  return (
    <>
      <TopNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
