import React from "react"
import { Link } from "gatsby"

import tags from "../../constants/tags"
import styles from "./tags.module.css"

const Tags = () => {
  return (
    <div className="my-5">
      <h3 className="sidebar-title">Etichete</h3>
      {tags.map(tag => {
        return (
          <Link fade to="/">
            <span className={styles.link}>{tag.title}</span>
          </Link>
        )
      })}
    </div>
  )
}

export default Tags
