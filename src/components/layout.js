/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Sidebar } from "./sidebar/sidebar"

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = React.useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Sidebar open={showSidebar} />
      <div className="bg-mainYellow h-screen flex flex-col">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} onClick={() => setShowSidebar(e => !e)} isOpen={showSidebar} />
        <main className="flex-1 overflow-y-auto max-h-screen">{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
