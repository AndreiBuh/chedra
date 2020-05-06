import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default () => (
  <Layout>
    <Hero>
      <Banner
        title="Chedra Tax"
        info="
        Welcome to our Travel English section! If you're planning a trip, and
        would like to learn/practice common English phrases used by travelers,
        we offer 60 free exercises that will help you do this."
      >
        <Link to="/" className="btn-white">
          Citeste mai mult
        </Link>
      </Banner>
    </Hero>
    <About />
    <Services />
  </Layout>
)
