import React from "react"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

import SEO from "../components/SEO"
import Layout from "../components/Layout"

const ploiesti = ({ pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
  const customCrumbLabel = location.pathname.replace("/", "")
  return (
    <Layout>
      <SEO title="Ploiesti" description="Chedra Tax ITP Ploiesti" />
      <Breadcrumb
        crumbs={crumbs}
        crumbLabel={customCrumbLabel}
        crumbSeparator=" > "
      />
      <p>itp-ploiesti page</p>
    </Layout>
  )
}

export default ploiesti
