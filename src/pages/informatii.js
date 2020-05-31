import React from "react"
import { graphql } from "gatsby"

import Title from "../components/Title"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Accordion from "../components/globals/accordion/Accordion"

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
        {nodes.map((item, index) => {
          return (
            <Accordion
              title={item.title}
              key={item.id}
              content={item.content.content}
            />
          )
        })}
      </section>
    </Layout>
  )
}

export default info
