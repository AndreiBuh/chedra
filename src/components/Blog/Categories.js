import React from "react"
import { IconContext } from "react-icons"
import { FaCheck } from "react-icons/fa"

import categories from "../../constants/categories"
import styles from "./categories.module.css"

const Categories = () => {
  return (
    <div className="my-5">
      <h3 className="sidebar-title">Categorii</h3>
      {categories.map(category => {
        return (
          <div>
            <hr style={{ margin: "0" }} />
            <IconContext.Provider
              value={{
                style: {
                  verticalAlign: "middle",
                  color: "var(--primaryColor)",
                },
              }}
            >
              <FaCheck />
            </IconContext.Provider>
            <span className={styles.category}>{category.title}</span>
          </div>
        )
      })}
      <hr />
    </div>
  )
}

export default Categories
