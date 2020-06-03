import React from "react"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

import SEO from "../components/SEO"
import Layout from "../components/Layout"

const ciorani = ({ pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
  const customCrumbLabel = location.pathname.replace("/", "")
  return (
    <Layout>
      <SEO title="Ciorani" description="Chedra Tax ITP Ciorani" />
      <Breadcrumb
        crumbs={crumbs}
        crumbLabel={customCrumbLabel}
        crumbSeparator=" > "
      />
      <p>itp-ciorani page</p>
    </Layout>
  )
}

export default ciorani
