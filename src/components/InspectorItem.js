import React from "react"
import Img from "gatsby-image"

import styles from "../css/inspector.module.css"

const InspectorItem = ({ inspector }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgBx}>
        <Img fluid={inspector.image.fluid} alt={inspector.name} />
      </div>
      <div className={styles.details}>
        <h6 className={`${styles.name} lines`}>{inspector.name}</h6>
        <p className={styles.job}>
          {inspector.job} - {inspector.location}
        </p>
      </div>
    </div>
  )
}

export default InspectorItem
