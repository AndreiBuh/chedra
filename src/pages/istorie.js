import React from "react"
import { Link } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

import SEO from "../components/SEO"
import Layout from "../components/Layout"

const istorie = ({ pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const customCrumbLabel = location.pathname.replace("/", "")
  return (
    <Layout>
      <SEO title="Istorie" description="Chedra Tax ITP istorie" />
      <Breadcrumb
        crumbs={crumbs}
        crumbLabel={customCrumbLabel}
        crumbSeparator=" > "
      />
      <p>
        istorie page <Link to="/">Home page</Link>
      </p>
    </Layout>
  )
}

export default istorie
