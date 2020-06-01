import React from "react"
import { FaMale } from "react-icons/fa"
import { GiCartwheel } from "react-icons/gi"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import { Fade } from "react-awesome-reveal"

import styles from "../css/card.module.css"

const CardItem = ({ location }) => {
  console.log(location)
  return (
    <div className={styles.container}>
      <Fade cascade>
        <div className={styles.card}>
          <div className={styles.card__image}>
            <Img
              className={styles.card__image}
              fluid={location.image.fluid}
              alt={location.name}
            />
          </div>

          <div className={styles.card__content}>
            <h1 className={styles.card__title}>{location.city}</h1>
            <ul className={styles.card__details}>
              <li className={styles.card__item}>
                <FaMale />
                <span className={styles.card__value}>
                  {location.inspectors}
                </span>
                <span className={styles.card__text}>Inspectori ITP</span>
              </li>
              <li className={styles.card__item}>
                <GiCartwheel />
                <span className={styles.card__value}>
                  {location.city === "Ploiesti" ? "Da" : "Nu"}
                </span>
                <span className={styles.card__text}>Vulcanizare</span>
              </li>
            </ul>
            <p className={styles.card__paragraph}>{location.description}</p>
            <AniLink fade to={location.slug}>
              <div style={{ width: "100%", textAlign: "center" }}>
                <button className="btn btn-danger px-3">Detalii</button>
              </div>
            </AniLink>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default CardItem
