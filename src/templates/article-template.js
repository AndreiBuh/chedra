import React from "react"
import { graphql } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

export const query = graphql`
  query($slug: String!) {
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

const articleTemplate = ({ data: { article }, pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const customCrumbLabel = location.pathname.replace("/blog/", "")
  return (
    <Layout>
      <SEO title="Blog" description="Chedra Tax ITP Blog" />
      <Breadcrumb
        crumbs={crumbs}
        crumbLabel={customCrumbLabel}
        crumbSeparator=" > "
      />
      {article.title}
    </Layout>
  )
}

export default articleTemplate
