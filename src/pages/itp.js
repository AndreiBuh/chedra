import React from "react"
import { Link } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/Layout"

const itp = () => {
  return (
    <Layout>
      <SEO
        title="ITP"
        description="Chedra Tax ITP inspectie tehnica periodica Ploiesti"
      />
      <p>
        itp page <Link to="/">Home page</Link>
      </p>
    </Layout>
  )
}

export default itp
