import React from "react"
import { graphql } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"

export default ({ data, pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const customCrumbLabel = location.pathname.replace("/", "")
  return (
    <Layout>
      <SEO title="Vulcanizare" description="Chedra Tax vulcanizare" />
      <Breadcrumb
        crumbs={crumbs}
        crumbLabel={customCrumbLabel}
        crumbSeparator=" > "
      />
      <StyledHero image={data.heroImage.childImageSharp.fluid}></StyledHero>
    </Layout>
  )
}

//Page Query
export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "defaultBcg1.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
