import React from "react"

import SEO from "../components/SEO"
import Layout from "../components/Layout"

import Spinner from "../components/globals/spinner/Spinner"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Chedra Tax ITP contact" />
      <p>contact page</p>
      <Spinner />
    </Layout>
  )
}

export default contact
