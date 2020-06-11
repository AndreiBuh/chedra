import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Title from "./Title"
import Accordion from "../components/globals/accordion/Accordion"

import styles from "../css/faq-home.module.css"

const getQuestions = graphql`
  {
    questions: allContentfulFaq(filter: { feature: { eq: true } }) {
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

const FaqHome = () => {
  const {
    questions: { nodes },
  } = useStaticQuery(getQuestions)

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

  return (
    <div className={`${styles.faq} p-5`}>
      <Title title="Întrebări" subtitle="frecvente" titleColor="title-black" />
      {nodes.map((item, index) => {
        return (
          <Accordion
            item={item}
            key={item.id}
            index={index}
            toggleCollapseItem={toggleCollapseItem}
          />
        )
      })}
    </div>
  )
}

export default FaqHome
