import { FormattedMessage } from "gatsby-plugin-intl"
import React from "react"
import { VscGithubAlt, VscCode } from "react-icons/vsc";
const Navigation = ({ closeMenu }) => (
  <>
    <a
      href="https://kush-team.dev/"
      className="flex font-serif"
      target="_blank"
      rel="noreferrer"
      aria-label="ir a pagina de desarrollo"
    >
      <VscCode className="pl-1 mr-2 text-2xl"/>
      <FormattedMessage id="start_play" />
    </a>
    <a
      href="https://github.com/kush-team"
      className="flex font-serif"
      target="_blank"
      rel="noreferrer"
      aria-label="ir a pagina de desarrollo"
    >
      <VscGithubAlt className="pl-1 mr-2 text-2xl"/>
      Github
    </a>
  </>
)

export default Navigation
