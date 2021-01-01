/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Head from "./head"

import "../styles/reset.less"

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <main className="app">
        <div className="app__layout">
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout
