const path = require(`path`)
const dateformat = require(`dateformat`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allKushTeam {
        GetAllArticles {
          dataList {
            id
            title
            createdAt
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

