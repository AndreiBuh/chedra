const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const articles = await graphql(`
    {
      allContentfulArticle {
        nodes {
          slug
        }
      }
    }
  `)

  if (articles.errors) {
    reporter.panic("Eroare", JSON.stringify(articles.errors))
  }

  // paginate({
  //   createPage,
  //   articles: articles.data.allContentfulArticle.nodes,
  //   itemsPerPage: 2,
  //   pathPrefix: "/blog",
  //   component: path.resolve("./src/templates/article-template.js"),
  // })

  articles.data.allContentfulArticle.nodes.forEach(article => {
    createPage({
      path: `/blog/${article.slug}/`,
      component: path.resolve("./src/templates/article-template.js"),
      context: {
        slug: article.slug,
      },
    })
  })
}
