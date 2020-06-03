exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allContentfulArticle {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Eroare", JSON.stringify(result.errors))
  }

  result.data.allContentfulArticle.nodes.forEach(article => {
    actions.createPage({
      path: `/blog/${article.slug}/`,
      component: require.resolve("./src/templates/article-template.js"),
      context: {
        slug: article.slug,
      },
    })
  })
}
