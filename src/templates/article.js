import { graphql } from "gatsby"
import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo/seo"
import moment from "moment-timezone"

export const pageQuery = graphql`
  query($blogId: ID!) {
    allKushTeam {
      GetArticleById(id: $blogId) {
        data {
          title
          brief
          content
          author {
            username
          }
          createdAt
        }
      }
    }
  }
`

const ArticleTemplate = ({ data, location }) => {
  const article = data.allKushTeam.GetArticleById.data
  const intl = useIntl()

  return (
    <Layout location={location}>
      <SEO lang={intl.locale} title="Inicio" />
      <div className="flex-col items-center justify-center min-h-screen pb-24 mx-auto text-white bg-gray-900 border-t-2 border-green-500">
        <div className="w-full mx-auto mb-6 overflow-hidden tracking-wide bg-gray-800 rounded-lg">
          <div className="py-0 mx-auto bg-gray-800 r">
            <div className="flex flex-col items-center justify-between px-8 py-6 bg-gray-900 ">
              <h2 className="pt-24 mb-3 font-mono text-xl font-bold text-center text-white">
                GetArticleById in article.html
              </h2>
              <a
                href="https://kush-team.dev/"
                className="font-mono text-lg font-bold text-white uppercase border-b-2 border-green-500 cursor-pointer animate-pulse hover:no-underline"
              >
                edit template
              </a>
              <h2 className="max-w-xl px-8 pt-6 mb-2 font-mono text-5xl font-bold tracking-normal text-center">
                {article.title}
              </h2>
              <div className="max-w-3xl px-8 pb-0 font-mono text-2xl text-center">
                {article.brief}
              </div>
            </div>
            <div className="flex items-center justify-center px-8 pt-3 pb-12 bg-gray-900 ">
              <div className="flex flex-col items-center justify-center user-logo">
                <img
                  className="object-cover w-8 h-8 rounded-full shadow"
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
                  alt="avatar"
                  width="80"
                  height="80"
                />
                <h2 className="flex flex-col items-center justify-center font-mono text-lg font-bold tracking-tighter text-gray-100">
                  <span>{article.author.username}</span>
                  <span className="text-gray-300">{moment(article.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</span>
                </h2>
              </div>
            </div>

            <div className="max-w-xl min-h-screen px-8 pt-12 pb-64 mx-auto font-sans text-xl leading-loose text-justify ">
              {article.content}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ArticleTemplate
