import Article from "../components/plugs/allArticles"
import { useIntl} from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo/seo"
import React from "react"
import "./style.css"

export default () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO lang={intl.locale} title="Inicio" />
      <Article/>
    </Layout>
  )
}
