import React from "react"
import { Link } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/Layout"

const istorie = () => {
  return (
    <Layout>
      <SEO title="Istorie" description="Chedra Tax ITP istorie" />
      <p>
        istorie page <Link to="/">Home page</Link>
      </p>
    </Layout>
  )
}

export default istorie
