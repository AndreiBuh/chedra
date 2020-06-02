import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import styles from "../../css/faq.module.css"

const Faq = ({ className, image, children }) => {
  return (
    <div className={styles.faq}>
      <BackgroundImage className={className} fluid={image}>
        <div className="row">{children}</div>
      </BackgroundImage>
    </div>
  )
}

export default styled(Faq)`
  min-height: 50%;
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  .row {
    position: absolute;
    top: 80px;
  }
  @media (min-width: 992px) {
    min-height: 100%;
  }
`
