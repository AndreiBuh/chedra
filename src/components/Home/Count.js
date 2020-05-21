import React from "react"
import CountUp from "react-countup"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

import counts from "../../constants/counts"

import styles from "../../css/count.module.css"

const getCountImage = graphql`
  {
    countImage: file(relativePath: { eq: "count.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Count = () => {
  const data = useStaticQuery(getCountImage)
  return (
    <BackgroundImage fluid={data.countImage.childImageSharp.fluid}>
      <section className={styles.counts}>
        <span className={styles.rowOverlay}></span>
        <div className="container">
          <div className="row">
            {counts.map((item, index) => {
              return (
                <article key={index} className={`col-md-3 ${styles.count}`}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={item.icon}
                      className={styles.svgImage}
                      alt={item.title}
                    />
                  </div>
                  <div className={styles.details}>
                    <CountUp start={0} end={item.number} delay={0} duration={5}>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                    <h6>{item.text}</h6>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </BackgroundImage>
  )
}

export default Count
