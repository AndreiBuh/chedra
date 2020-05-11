import React from "react"
import Img from "gatsby-image"

import Title from "../Title"
import services from "../../constants/services"

import styles from "../../css/services.module.css"

const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="Serviciile" subtitle="noastre" titleColor="title-black" />
      <div className={styles.center}>
        {services.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <Img
                fluid={item.icon}
                className={styles.svgImage}
                alt={item.title}
              />
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
