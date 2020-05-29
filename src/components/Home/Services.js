import React from "react"
import { Zoom } from "react-awesome-reveal"

import Title from "../Title"
import services from "../../constants/services"

import styles from "../../css/services.module.css"

const Services = () => {
  return (
    <section className="container p-5">
      <Title title="Serviciile" subtitle="noastre" titleColor="title-black" />
      <div className="row">
        {services.map((item, index) => {
          return (
            <div className="col-sm-4">
              <Zoom cascade>
                <article key={index} className={styles.service}>
                  <div className={styles.iconWrapper}></div>
                  <div className={styles.iconContent}>
                    <img
                      src={item.icon}
                      className={styles.svgImage}
                      alt={item.title}
                    />
                  </div>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </article>
              </Zoom>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
