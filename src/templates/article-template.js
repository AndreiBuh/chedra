import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String) {
    article: contentfulArticle(slug: { eq: $slug }) {
      title
      read
      content {
        json
      }
      image {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

const articleTemplate = ({ data: { article } }) => {
  return <div>{article.title}</div>
}

export default articleTemplate
