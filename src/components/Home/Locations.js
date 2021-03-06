import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Title from "../Title"
import CardItem from "../CardItem"

import styles from "../../css/locations.module.css"

const getLocations = graphql`
  {
    locations: allContentfulLocation {
      nodes {
        id
        address
        city
        inspectors
        slug
        image {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        description
      }
    }
  }
`

const Locations = () => {
  const {
    locations: { nodes },
  } = useStaticQuery(getLocations)
  return (
    <section className={`py-5 p-sm-5 ${styles.location}`}>
      <Title title="Puncte de lucru" subtitle="ITP" titleColor="title-black" />
      <div className="container">
        <div class="row">
          {nodes.map(location => {
            return (
              <div class="col-md-4">
                <CardItem key={location.id} location={location} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Locations
