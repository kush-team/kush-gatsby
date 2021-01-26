import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo/seo"
import React from "react"
import "./style.css"
import "twin.macro"

export default () => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO lang={intl.locale} title="Inicio" />
      <div className="max-w-6xl min-h-screen pt-24 mx-auto mt-24 bg-gray-900">
        <h1 className="font-mono text-3xl text-center text-white capitalize">
          <FormattedMessage id="contact" />
        </h1>
      </div>
    </Layout>
  )
}
