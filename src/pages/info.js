import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const info = () => {
  return (
    <Layout>
      <p>
        info page <Link to="/">Home page</Link>
      </p>
    </Layout>
  )
}

export default info
