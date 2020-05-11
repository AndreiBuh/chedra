import React from "react"

import Title from "../Title"

import styles from "../../css/about.module.css"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="Clientii" subtitle="nostrii" titleColor="title-black" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutInfo}></article>
      </div>
    </section>
  )
}

export default About
