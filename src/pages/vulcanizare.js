import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Vulcanizare" description="Chedra Tax vulcanizare" />
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
