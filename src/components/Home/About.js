import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Title from "../Title"

import styles from "../../css/about.module.css"

const getAboutImage = graphql`
  {
    aboutImage: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage)
  return (
    <section className={`${styles.about} p-5`}>
      <Title title="Despre" subtitle="noi" titleColor="title-black" />
      <div className="container">
        <div className="row">
          <article className="col-sm-3 p-3">
            <Img fluid={aboutImage.childImageSharp.fluid} alt="company image" />
          </article>
          <article className="col-sm-9 p-3 p-sm-5">
            <p>
              Am inceput afacerea in 2007, si de atunci crestem si ne
              perfectionam in fiecare an.
            </p>
            <p>
              {" "}
              Experienta acumulata ne face siguri ca putem depasi orice
              impediment, ca nu exista problema careia sa nu ii putem gasi o
              rezolvare.
            </p>

            <p>
              Misiunea stației noastre 𝙄𝙏𝙋 este să venim în întâmpinarea
              nevoilor dumneavoastră prin servicii de calitate superioară,
              consultanță și asistență tehnică la un grad cât mai înalt de
              profesionalism.
            </p>
            <p>
              nspecția Tehnică Periodică (𝑰.𝑻.𝑷.) se efectuează de către
              specialiștii noștri, cu echipamente dedicate, performante și care
              permit efectuarea operațiilor prevăzute de legislație.
            </p>
            <p>
              Statia noastra de inspectie tehnica presteaza acesta activitate
              pentru toata gama de autovehicule inmatriculate in Romania. Suntem
              siguri ca vei fi multumit de serviciile noastre!
            </p>

            <p>
              <strong>Chelba Aurel</strong> - Fondator{" "}
              <Link to="/">Chedra Tax</Link>
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
