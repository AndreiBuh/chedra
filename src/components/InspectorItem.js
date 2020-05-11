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
        <h4 className={styles.name}>{inspector.name}</h4>
        <h6 className={styles.job}>
          {inspector.job} - {inspector.location}
        </h6>
      </div>
    </div>
  )
}

export default InspectorItem
