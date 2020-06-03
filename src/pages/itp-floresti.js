import React from "react"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

import SEO from "../components/SEO"
import Layout from "../components/Layout"

const floresti = ({ pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
  const customCrumbLabel = location.pathname.replace("/", "")
  return (
    <Layout>
      <SEO title="ITP Floresti" description="Chedra Tax ITP Floresti" />
      <Breadcrumb
        crumbs={crumbs}
        crumbLabel={customCrumbLabel}
        crumbSeparator=" > "
      />
      <p>itp-floresti page</p>
    </Layout>
  )
}

export default floresti
