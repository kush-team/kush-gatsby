/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const _ = require("lodash")
const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allKushTeam {
        GetAllArticles {
          dataList {
            id
            title
          }
        }
      }
    }
  `)

  data.allKushTeam.GetAllArticles.dataList.forEach(blog => {
    actions.createPage({
      path: `/article/${blog.id}/`,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        blogId: blog.id,
      },
    })
  })
}
