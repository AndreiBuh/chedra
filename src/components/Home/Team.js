import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Title from "../Title"
import Carousel from "../Carousel"
import InspectorItem from "../InspectorItem"

const getInspectors = graphql`
  {
    inspectors: allContentfulInspectors {
      nodes {
        id
        location
        name
        job
        phone
        image {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid_withWebp
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
  slidesToShow: 4,
  slidesToScroll: 1,
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

const Team = () => {
  const {
    inspectors: { nodes },
  } = useStaticQuery(getInspectors)
  return (
    <section className="p-5 pattern-background">
      <Title title="Echipa" subtitle="noastra" titleColor="title-white" />
      <div class="container">
        <Carousel settings={settings}>
          {nodes.map(inspector => (
            <InspectorItem inspector={inspector} key={inspector.id} />
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Team
