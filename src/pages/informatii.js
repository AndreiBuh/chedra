import React from "react"
import { graphql } from "gatsby"

import Title from "../components/Title"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Accordion from "../components/globals/accordion/Accordion"

import styles from "../css/informatii.module.css"

export const query = graphql`
  {
    faq: allContentfulFaq {
      nodes {
        content {
          content
        }
        id
        title
      }
    }
  }
`

const info = ({ data }) => {
  const {
    faq: { nodes },
  } = data

  return (
    <Layout>
      <SEO title="Informatii" description="Chedra Tax ITP informatii utile" />
      <section className="container p-4 p-sm-5">
        <Title title="Informatii" subtitle="utile" titleColor="title-black" />
        <h1 className={`${styles.heading} mt-5`}>Întrebări generale</h1>
        {nodes.map((item, index) => {
          return (
            <Accordion
              title={item.title}
              key={item.id}
              content={item.content.content}
            />
          )
        })}
        {/* <h1 className={styles.heading}>Despre Chedra Tax</h1> */}
      </section>
    </Layout>
  )
}

export default info
