import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const info = () => {
  return (
    <Layout>
      <SEO title="Informatii" description="Chedra Tax ITP informatii utile" />
      <p>
        info page <Link to="/">Home page</Link>
      </p>
    </Layout>
  )
}

export default info
