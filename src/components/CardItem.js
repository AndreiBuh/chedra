import React from "react"
import { FaMale, FaPhone } from "react-icons/fa"
import { GiCartwheel } from "react-icons/gi"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../css/card.module.css"

const CardItem = ({ location }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__image}>
          <img
            className={styles.card__image}
            src={location.image.fluid.src}
            alt="image"
          />
        </div>

        <div className={styles.card__content}>
          <h1 className={styles.card__title}>{location.city}</h1>
          <ul className={styles.card__details}>
            <li className={styles.card__item}>
              <FaMale />
              <span className={styles.card__value}>10</span>
              <span className={styles.card__text}>Inspectori ITP</span>
            </li>
            <li className={styles.card__item}>
              <GiCartwheel />
              <span className={styles.card__value}>Da</span>
              <span className={styles.card__text}>Vulcanizare</span>
            </li>
            {/*<li className={styles.card__item}>
              <FaPhone />
              <span className={styles.card__value}>0754689944</span>
              <span className={styles.card__text}>Telefon</span>
  </li>*/}
          </ul>
          <p className={styles.card__paragraph}>{location.description}</p>
          <AniLink fade to="/contact">
            <div style={{ width: "100%", textAlign: "center" }}>
              <button className={styles.card__button}>Detalii</button>
            </div>
          </AniLink>
        </div>
      </div>
    </div>
  )
}

export default CardItem
