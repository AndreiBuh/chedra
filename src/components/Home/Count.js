import React from "react"
import CountUp from "react-countup"

import counts from "../../constants/counts"

import styles from "../../css/count.module.css"

const Count = () => {
  return (
    <section className={styles.counts}>
      <div className={styles.center}>
        <div className={styles.center}>
          {counts.map((item, index) => {
            return (
              <article key={index} className={styles.count}>
                <div className={styles.imageWrapper}>
                  <img src={item.icon} className={styles.svgImage} />
                </div>
                <div className={styles.details}>
                  <CountUp start={0} end={item.number} delay={0} duration={5}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                  <h3>{item.text}</h3>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Count
