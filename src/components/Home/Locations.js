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
        image {
          fluid(maxWidth: 1200) {
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
    <section className={styles.location}>
      <Title title="Puncte de lucru" subtitle="ITP" titleColor="title-black" />
      <div className="container">
        <div className={styles.center}>
          {nodes.map(location => {
            return <CardItem key={location.id} location={location} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Locations
