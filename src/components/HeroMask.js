import React from "react"
import { Zoom } from "react-awesome-reveal"

import styles from "../css/hero-mask.module.css"

const HeroMask = ({ children }) => {
  return (
    <div className={`${styles.mask} p-5 text-center`}>
      <Zoom cascade>{children}</Zoom>
    </div>
  )
}

export default HeroMask
