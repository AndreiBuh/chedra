import React from "react"

import Title from "../Title"

import styles from "../../css/gallery.module.css"

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <Title title="galerie" subtitle="locatii" titleColor="title-white" />
    </section>
  )
}

export default Gallery
