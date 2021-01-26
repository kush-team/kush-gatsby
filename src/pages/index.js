import Articles from "../components/plugs/allArticles"
import Hero from "../components/plugs/hero"
import Layout from "../components/layout"
import "twin.macro"
import SEO from "../components/seo/seo"
import React from "react"
import "./style.css"

export default () => (
  <Layout>
    <SEO title="Inicio" />
    <Hero />
    <div className="flex flex-col items-center justify-center w-full py-24 mx-auto bg-gray-900">
      <h2 className="mb-3 font-mono text-3xl font-bold text-center text-white ">
        AllArticles in articles.html
      </h2>
      <a
        href="https://kush-team.dev/"
        className="mb-12 font-mono text-lg font-bold text-white uppercase border-b-2 border-green-500 cursor-pointer animate-pulse hover:no-underline"
      >
        edit template
      </a>
      <Articles />
    </div>
  </Layout>
)
