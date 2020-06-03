import React from "react"
import Img from "gatsby-image"
import { Fade } from "react-awesome-reveal"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./blog-item.module.css"

const BlogItem = ({ title, read, date, content, image, slug }) => {
  console.log(image.fluid)
  return (
    <Fade cascade>
      <div className={`${styles.blogCard} card mb-3`}>
        <AniLink fade to={`blog/${slug}`}>
          <Img fluid={image.fluid} alt={image.title} />
        </AniLink>
        <div className="card-body">
          <AniLink fade to={`blog/${slug}`}>
            <h6 className="card-title font-weight-bold">{title}</h6>
          </AniLink>
          <small className="text-muted">
            <span className="time">{read} minute </span> |
            <span className="date"> {date}</span>
          </small>
          <p className="card-text">{documentToReactComponents(content.json)}</p>
          <AniLink fade to={`blog/${slug}`}>
            <button className="btn btn-danger px-4">Citeste</button>
          </AniLink>
        </div>
      </div>
    </Fade>
  )
}

export default BlogItem
