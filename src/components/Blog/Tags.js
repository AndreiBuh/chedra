import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import tags from "../../constants/tags"
import styles from "./tags.module.css"

const Tags = () => {
  return (
    <div className="my-5">
      <h3 className={styles.title}>Etichete</h3>
      {tags.map(tag => {
        return (
          <AniLink fade to="/">
            <span className={styles.link}>{tag.title}</span>
          </AniLink>
        )
      })}
    </div>
  )
}

export default Tags
