import React from "react"

import Title from "../Title"
import aboutImg from "../../images/about.jpg"

import styles from "../../css/about.module.css"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="despre" subtitle="noi" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={aboutImg} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            when you first landed on the page, you are already feeling the tense
            atmosphere of the video playing in the background, and the more you
            read through easily-digestible paragraphs
          </p>
          <p>
            when you first landed on the page, you are already feeling the tense
            atmosphere of the video playing in the background, and the more you
            read through easily-digestible paragraphs
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
