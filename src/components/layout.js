/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { BiChevronsUp } from "react-icons/bi"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header/header"
import "./layout.css"
import "twin.macro"

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div id="top" aria-hidden="true" className="invisible"></div>
      {/*<Offcanvas />*/}
      <div className="mx-auto">
          <main className="min-h-screen">{children}</main>
      </div>
      <AnchorLink
        className="fixed bottom-0 left-0 z-50 p-4 m-4 font-mono text-2xl text-white bg-gray-900 rounded-full hover:text-gray-300 hover:bg-gray-800"
        href="#top"
        alt="going up anchor link"
        title="going up anchor link"
      >
        <BiChevronsUp />
      </AnchorLink>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

