import React from "react"
import { Zoom } from "react-awesome-reveal"

import Title from "../Title"
import Comb from "../globals/comb/Comb"

import steps from "../../constants/steps"
import styles from "../../css/steps.module.css"

const Steps = () => {
  return (
    <section className={`p-5 ${styles.steps}`}>
      <Title title="Cum" subtitle="functioneaza?" titleColor="title-black" />

      <div className="row p-4">
        {steps.map((item, index) => {
          let background, color
          if (index % 2 === 0) {
            background = "var(--mainBlack)"
            color = "var(--mainWhite)"
          } else {
            background = "var(--mainGrey)"
            color = "var(--mainBlack)"
          }
          return (
            <>
              <div className={`${styles.itemStep} col-sm-3`} key={index}>
                <Zoom cascade>
                  <>
                    <Comb background={background} color={color}>
                      <span style={{ fontSize: "40px" }}>{index + 1}</span>
                    </Comb>
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </>
                </Zoom>
              </div>
            </>
          )
        })}
      </div>
    </section>
  )
}

export default Steps
