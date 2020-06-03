import React from "react"
import Img from "gatsby-image"
import { Fade } from "react-awesome-reveal"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from "gatsby"

import styles from "./blog-item.module.css"

const BlogItem = ({ title, read, date, content, image, slug }) => {
  console.log(image.fluid)
  return (
    <Fade cascade>
      <div className={`${styles.blogCard} card mb-3`}>
        <Link fade to={`blog/${slug}`}>
          <Img fluid={image.fluid} alt={image.title} />
        </Link>
        <div className="card-body">
          <Link fade to={`blog/${slug}`}>
            <h6 className="card-title font-weight-bold">{title}</h6>
          </Link>
          <small className="text-muted">
            <span className="time">{read} minute </span> |
            <span className="date"> {date}</span>
          </small>
          <p className="card-text">{documentToReactComponents(content.json)}</p>
          <Link fade to={`blog/${slug}`}>
            <button className="btn btn-danger px-4">Citeste</button>
          </Link>
        </div>
      </div>
    </Fade>
  )
}

export default BlogItem
