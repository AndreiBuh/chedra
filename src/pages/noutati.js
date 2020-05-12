import React from "react"
import { Link } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/Layout"

const noutati = () => {
  return (
    <Layout>
      <SEO title="Noutati" description="Chedra Tax ITP noutati" />
      <p>
        noutati page <Link to="/">Home page</Link>
      </p>
    </Layout>
  )
}

export default noutati
