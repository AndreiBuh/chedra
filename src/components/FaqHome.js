import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Title from "./Title"
import Accordion from "../components/globals/accordion/Accordion"

import styles from "../css/faq-home.module.css"

const getQuestions = graphql`
  {
    questions: allContentfulFaq(limit: 3) {
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
  return (
    <div className={`${styles.faq} p-5`}>
      <Title title="Întrebări" subtitle="frecvente" titleColor="title-black" />
      {nodes.map(question => {
        return (
          <Accordion
            title={question.title}
            key={question.id}
            content={question.content.content}
          />
        )
      })}
    </div>
  )
}

export default FaqHome
