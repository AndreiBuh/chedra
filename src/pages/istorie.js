import React from "react"
import { Link } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import History from "../components/History/History"

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
      <div className="container p-5">
        <History />
      </div>
    </Layout>
  )
}

export default istorie
