import React from "react"

import styles from "../css/banner.module.css"

const Banner = ({ title, infoTitle, infoText, children }) => {
  return (
    <div className={styles.banner}>
      <h2>{infoTitle}</h2>
      <h4>{infoText}</h4>
      {children}
    </div>
  )
}

export default Banner
