import React, { useState } from "react"
import { graphql } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

import Title from "../components/Title"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Accordion from "../components/globals/accordion/Accordion"

import styles from "../css/informatii.module.css"

export const query = graphql`
  {
    faq: allContentfulFaq {
      nodes {
        feature
        content {
          content
        }
        id
        title
        open
      }
    }
  }
`

const Info = ({ data, pageContext, location }) => {
  const {
    faq: { nodes },
  } = data
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const [faqs, setFaqs] = useState(nodes)

  const toggleCollapseItem = id => {
    setFaqs(
      faqs.map(item => {
        if (item.id === id) {
          item.open = !item.open
        } else {
          item.open = false
        }
        return item
      })
    )
  }

  const customCrumbLabel = location.pathname.replace("/", "")
  return (
    <Layout>
      <SEO title="Informatii" description="Chedra Tax ITP informatii utile" />
      <Breadcrumb
        crumbs={crumbs}
        crumbLabel={customCrumbLabel}
        crumbSeparator=" > "
      />
      <section className="container p-4 p-sm-5">
        <Title title="Informatii" subtitle="utile" titleColor="title-black" />
        <h1 className={`${styles.heading} mt-5`}>Întrebări generale</h1>
        {faqs.map((item, index) => {
          return (
            <Accordion
              item={item}
              key={item.id}
              index={index}
              toggleCollapseItem={toggleCollapseItem}
            />
          )
        })}
      </section>
    </Layout>
  )
}

export default Info
