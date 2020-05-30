import React from "react"

import styles from "./comb.module.css"

const About = ({ children, background, color }) => {
  return (
    <article className={styles.comb}>
      <div
        className={styles.iconWrapper}
        style={{ background: `${background}` }}
      ></div>
      <div className={styles.iconContent} style={{ color: `${color}` }}>
        {children}
      </div>
    </article>
  )
}

export default About
