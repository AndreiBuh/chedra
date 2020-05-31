import React, { useState, useRef } from "react"
import { IconContext } from "react-icons"
import { FaChevronRight } from "react-icons/fa"
import { Fade } from "react-awesome-reveal"

import styles from "./accordion.module.css"

const Accordion = ({ title, content }) => {
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")
  const [setRotate, setRotateState] = useState("icon")

  const text = useRef(null)

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "")
    setHeightState(
      setActive === "active" ? "0px" : `${text.current.scrollHeight}px`
    )
    setRotateState(setActive === "active" ? "icon" : "icon rotate")
  }
  return (
    <Fade cascade>
      <div className={styles.section}>
        <button
          className={`${styles.toggle} ${setActive}`}
          onClick={toggleAccordion}
        >
          <p className={styles.title}>{title}</p>
          <IconContext.Provider
            value={{
              style: {
                color: "#777",
                fontSize: "1rem",
              },
              className: `${setRotate}`,
            }}
          >
            <FaChevronRight />
          </IconContext.Provider>
        </button>
        <div
          className={styles.content}
          ref={text}
          style={{ maxHeight: `${setHeight}` }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: `${content}` }}
            className="p-3 p-sm-5"
          />
        </div>
      </div>
    </Fade>
  )
}

export default Accordion
