import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import Count from "../components/Home/Count"
import Gallery from "../components/Home/Gallery"
import Locations from "../components/Home/Locations"
import Team from "../components/Home/Team"
import Steps from "../components/Home/Steps"
import Testimonials from "../components/Home/Testimonials"
import HeroMask from "../components/HeroMask"
import Newsletter from "../components/globals/newsletter/Newsletter"
import Faq from "../components/Home/Faq"
import SEO from "../components/SEO"
import FaqHome from "../components/FaqHome"

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
    <Faq image={data.faqImage.childImageSharp.fluid}>
      <FaqHome />
    </Faq>
    <Team />
    <Testimonials />
    <Newsletter />
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
    faqImage: file(relativePath: { eq: "car.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
