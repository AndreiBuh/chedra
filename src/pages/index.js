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
import Clients from "../components/Home/Clients"
import Testimonials from "../components/Home/Testimonials"
import SEO from "../components/SEO"

export default ({ data }) => (
  <Layout>
    <SEO
      title="Acasa"
      description="pagina principala Chedra Tax ITP inspectie tehnica periodica Ploiesti"
    />
    <StyledHero home="true" image={data.heroImage.childImageSharp.fluid}>
      <Banner
        infoTitle="Nu știi când expiră ITP-ul?"
        infoText="Verifică la Registru Auto Roman(RAR) dacă Inspecția Tehnică Periodică a mașinii tale este valabilă!"
      >
        <a
          href="http://prog.rarom.ro/rarpol/rarpol.asp"
          className="btn-white"
          target="_blank"
          without
          rel="noopener noreferrer"
        >
          Verifică
        </a>
      </Banner>
    </StyledHero>
    <Services />
    <About />
    <Gallery />
    <Locations />
    <Count />
    <Clients />
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
