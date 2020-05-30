import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import Count from "../components/Home/Count"
import Gallery from "../components/Home/Gallery"
import Locations from "../components/Home/Locations"
import Team from "../components/Home/Team"
import Steps from "../components/Home/Steps"
import Testimonials from "../components/Home/Testimonials"
import HeroMask from "../components/HeroMask"
import SEO from "../components/SEO"

export default ({ data }) => (
  <Layout>
    <SEO
      title="Acasa"
      description="pagina principala Chedra Tax ITP inspectie tehnica periodica Ploiesti"
    />
    <StyledHero home="true" image={data.heroImage.childImageSharp.fluid}>
      <HeroMask />
    </StyledHero>
    <Services />
    <About />
    <Steps />
    <Gallery />
    <Locations />
    <Count />
    <Team />
    <Testimonials />
  </Layout>
)

//Page query
export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
