import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Title from "../Title"
import signature from "../../images/signature.png"

import styles from "../../css/about.module.css"

const getAboutImage = graphql`
  {
    aboutImage: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage)
  return (
    <section className={styles.about}>
      <Title title="Despre" subtitle="noi" titleColor="title-black" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} alt="company image" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <p>
            Am inceput afacerea in 2005, si de atunci crestem si ne perfectionam
            in fiecare an. Experienta acumulata ne face siguri ca putem depasi
            orice impediment, ca nu exista problema careia sa nu ii putem gasi o
            rezolvare.
          </p>

          <p>
            Avem o echipa formata din oameni responsabili, profesionisti,
            capabili sa raspunda celor mai inalte standarde si exigente. I-am
            ales cu grija , tocmai ca tu, clientul nostru, sa fi intotdeauna
            multumit de serviciile noastre.
          </p>
          <p>
            Printre ei vei regasi ingineri, tehnicieni si maistri auto, cu multa
            experienta si foarte bine pregatiti pentru a se adapta la orice
            cerinta.
          </p>
          <p>
            Statia noastra de inspectie tehnica presteaza acesta activitate
            pentru toata gama de autovehicule inmatriculate in Romania. Suntem
            siguri ca vei fi multumit de serviciile noastre!
          </p>
          <p>
            <strong>Chelba Dragos</strong> - Fondator{" "}
            <Link to="/">Chedra Tax</Link>
          </p>
          <img src={signature} alt="signature" />
        </article>
      </div>
    </section>
  )
}

export default About
