import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import BlogItem from "./BlogItem"

const getArticles = graphql`
  {
    articles: allContentfulArticle {
      nodes {
        content {
          json
        }
        id
        title
        slug
        date(formatString: "MMMM DD, YYYY")
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        read
      }
    }
  }
`

const BlogList = () => {
  const {
    articles: { nodes },
  } = useStaticQuery(getArticles)
  return (
    <div className="card-columns">
      {nodes.map(article => {
        return (
          <BlogItem
            key={article.id}
            title={article.title}
            read={article.read}
            date={article.date}
            content={article.content}
            image={article.image}
            slug={article.slug}
          />
        )
      })}
    </div>
  )
}

export default BlogList
