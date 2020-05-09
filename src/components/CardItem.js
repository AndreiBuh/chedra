import React from "react"

import styles from "../css/card.module.css"

const CardItem = ({ item }) => {
  console.log(item)
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__image}>
          <img
            className={styles.card__image}
            src={item.image.fluid.src}
            alt="image"
          />
        </div>

        <svg className={styles.card__svg} viewBox="0 0 800 500">
          <path
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
            stroke="transparent"
            fill="#333"
          />
          <path
            className={styles.card__line}
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
            stroke="pink"
            stroke-width="3"
            fill="transparent"
          />
        </svg>

        <div className={styles.card__content}>
          <h1 className={styles.card__title}>{item.city}</h1>
          <p className={styles.card__paragraph}>{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default CardItem
