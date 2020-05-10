import React from "react"

import styles from "../css/inspector.module.css"

const InspectorItem = ({ inspector }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgBx}>
        <img src={inspector.image.fluid.src} alt={inspector.name} />
      </div>
      <div className={styles.details}>
        <h4 className={styles.name}>{inspector.name}</h4>
        <h5 className={styles.job}>
          {inspector.job} - {inspector.location}
        </h5>
      </div>
    </div>
  )
}

export default InspectorItem
