import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Title from "../Title"
import Carousel from "../Carousel"

import styles from "../../css/gallery.module.css"

const getGalleryImages = graphql`
  {
    galleryImages: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`

let settings = {
  dots: true,
  autoplay: true,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  pauseOnHover: true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}
const Gallery = () => {
  const { galleryImages } = useStaticQuery(getGalleryImages)
  return (
    <section className={styles.gallery}>
      <Title title="Galerie" subtitle="locatii" titleColor="title-white" />
      <Carousel settings={settings}>
        {galleryImages.nodes.map((photo, index) => {
          return (
            <img
              src={photo.childImageSharp.fluid.src}
              alt={photo.childImageSharp.fluid.originalName}
              key={index}
            />
          )
        })}
      </Carousel>
    </section>
  )
}

export default Gallery
