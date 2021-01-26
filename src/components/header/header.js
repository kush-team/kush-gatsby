import PropTypes from "prop-types"
import React from "react"
import Language from "../language/language.js"
import Headroom from "react-headroom"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { injectIntl, Link } from "gatsby-plugin-intl"
import "./header.css"
import Navigation from "./navigation"
import "twin.macro"

const Header = ({ siteTitle }) => (
  <Headroom disableInlineStyles>
    <HeaderContainer>
      <InnerHeader>
        <Logo>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white fill-current"
            overflow="visible"
            viewBox="0 0 177.24 177.24"
          >
            <path d="M88.62 0C39.68 0 0 39.68 0 88.62s39.68 88.62 88.62 88.62 88.62-39.68 88.62-88.62S137.56 0 88.62 0zm43.84 100.87c8.78 7.48 7.69 17.48-2.09 23.37-5.39 3.26-10.87 2.16-16.61-3.32-2.04-1.96-3.94-4.11-6.17-5.8-.87-.66-2.07-1.94-3.51-1.19-1.4.72-1.27 2.19-1.27 3.52 0 5.66-.24 11.34.08 16.98.38 6.54-4.4 12.25-10.61 14.85-4.95 2.07-11.68-.93-15.68-6.46-1.31-1.8-1.73-3.81-1.69-6.06.1-6.16-.01-12.32.02-18.48.01-1.57-.1-3.07-1.76-3.75-1.45-.59-2.51.33-3.54 1.23-2.88 2.49-5.82 4.91-8.68 7.43-5.9 5.22-14.03 2.16-18.1-2.37-4.87-5.4-4.73-13.48.53-18.46 6.6-6.25 13.54-12.13 20.22-18.29 1.07-.99 3.46-1.64 2.48-3.72-.88-1.88-2.99-.88-4.55-.95-3.32-.15-6.66.08-9.98-.08-7.52-.36-13.03-6.15-13.12-13.6-.09-7.66 5.5-13.82 13.15-14.09 6.48-.23 12.99-.26 19.47-.05 3.15.1 4.16-1.03 3.92-4.02-.18-2.31.17-4.68-.06-6.98-.52-5.33 2.63-8.59 6.67-10.62 4.56-2.28 10.07-2.64 14.21.3 4.32 3.07 6.86 7.66 6.31 13.81-.65 7.29-.15 7.33 7.3 7.33 5.16 0 10.32-.06 15.48.02 9 .16 13.9 5.09 13.93 13.89.03 8.55-5.17 13.7-14.08 13.91-2.83.06-5.66.12-8.49-.02-2.05-.1-3.7.52-5.56 1.83 7.47 6.81 14.4 13.55 21.78 19.84z" />
          </svg>
          <Link to="/" aria-label="KushTeamDev">
            {siteTitle}
            <span className="px-2 py-1 mx-2 text-sm bg-indigo-700 rounded-md">
              .dev
            </span>
          </Link>
        </Logo>
        <Nav>
          <Navigation />
        </Nav>
        <div style={{width: "300px"}} className="hidden sm:block lg:px-0">
          <Language />
        </div>
      </InnerHeader>
    </HeaderContainer>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default injectIntl(Header)

const HeaderContainer = styled.header`
  ${tw`flex `}
`

const Nav = styled.nav`
  ${tw`justify-center hidden w-full font-sans lg:flex`}
`

const InnerHeader = styled.div`
  ${tw`flex items-center justify-start w-full max-w-6xl px-3 py-3 m-auto lg:justify-start md:pr-0 lg:py-1`}


`

const Logo = styled.div`
  ${tw`flex m-0 md:pl-0`}
  width: 300px;
  a {
    ${tw`flex items-center ml-3 font-mono text-lg font-bold text-white duration-200`}
  }
`
