import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import Count from "../components/Home/Count"
import Gallery from "../components/Home/Gallery"

export default () => (
  <Layout>
    <Hero>
      <Banner info="Welcome to our Travel English">
        <Link to="/" className="btn-white">
          Citeste mai mult
        </Link>
      </Banner>
    </Hero>
    <About />
    <Gallery />
    <Services />
    <Count />
  </Layout>
)
