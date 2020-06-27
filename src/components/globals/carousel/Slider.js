import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Img from "gatsby-image"
import HeroMask from "../../HeroMask"

import styles from "./slider.module.css"

const getCarouselImages = graphql`
  {
    carousel: allFile(
      filter: { relativeDirectory: { eq: "slider" } }
      limit: 3
    ) {
      nodes {
        relativePath
        childImageSharp {
          fluid(maxWidth: 4000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Slider = () => {
  const { carousel } = useStaticQuery(getCarouselImages)
  return (
    <Carousel autoPlay infiniteLoop>
      {carousel.nodes.map((image, index) => {
        return (
          <div>
            <Img
              fluid={image.childImageSharp.fluid}
              alt={image.childImageSharp.fluid.originalName}
              key={index}
            />
            {index === 0 ? (
              <p className="legend">
                <HeroMask>
                  <h2>Verifica valabilitate ITP</h2>
                  <h6>
                    Verifică la Registrul Auto Roman(RAR) dacă Inspecția Tehnică
                    Periodică a mașinii tale este valabilă!
                  </h6>
                  <a
                    href="http://prog.rarom.ro/rarpol/rarpol.asp"
                    className="btn-white"
                  >
                    Verifica
                  </a>
                </HeroMask>
              </p>
            ) : null}
            {index === 1 ? (
              <p className="legend">
                <HeroMask>
                  <h2>Pre-verificare ITP GRATUITA</h2>
                  <h4>Un mod sigur de a preveni un refuz ITP</h4>
                  <h6>Un mod sigur de a preveni un refuz ITP</h6>
                  <h6>Programari la: 0735.222.777</h6>
                </HeroMask>
              </p>
            ) : null}
            <p className="legend">
              <HeroMask>
                <h2>SMS Alert !</h2>
                <h6>
                  Știați că...stația noastră ChedraTax vă va informa prin sms,
                  cu 7️ zile înainte să vă expire Inspecția Tehnică Periodică?
                </h6>
              </HeroMask>
            </p>
            ) : null}
          </div>
        )
      })}
    </Carousel>
  )
}

export default Slider
