import React, { useState } from "react"
import { IconContext } from "react-icons"
import { FaPlus, FaMinus } from "react-icons/fa"
import { Fade } from "react-awesome-reveal"

import styles from "./accordion.module.css"

const Accordion = ({ item, toggleCollapseItem, index }) => {
  return (
    <Fade cascade>
      <div
        className={`${styles.card} p-4 my-2 item ${item.open ? "open" : ""}`}
        onClick={() => toggleCollapseItem(item.id)}
      >
        <h6 className={`my-auto ${styles.title}`}>
          {index + 1}. {item.title}
        </h6>

        <IconContext.Provider
          value={{
            style: {
              color: "#777",
              fontSize: "1rem",
              transition: "transform .6s ease",
            },
          }}
        >
          {item.open ? <FaMinus /> : <FaPlus />}
        </IconContext.Provider>
      </div>
      <div className="content">
        <div
          dangerouslySetInnerHTML={{ __html: `${item.content.content}` }}
          className="p-3 p-sm-4"
        />
      </div>
    </Fade>
  )
}

export default Accordion
