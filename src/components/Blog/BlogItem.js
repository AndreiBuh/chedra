import React from "react"

import styles from "./blog-item.module.css"

const BlogItem = () => {
  return (
    <div className={`${styles.blogCard} card`}>
      <img
        className="card-img"
        src="https://www.kmgauto.ro/images/img-stire-kmg53.jpg"
        alt="masina"
      />
      <div className="card-body">
        <h6 className="card-title font-weight-bold">
          Inspecția tehnică periodică: cum și când se face
        </h6>
        <small className="text-muted">
          <span className="time">30 minutes </span> |
          <span className="date"> Oct 20, 12:45</span>
        </small>
        <p className="card-text">
          Nu poți circula legal pe drumurile publice din România fără ca mașina
          ta să fi trecut cu brio inspecția tehnică periodică.
        </p>
        <button className="btn btn-danger px-4">Citeste</button>
      </div>
      <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0"></div>
    </div>
  )
}

export default BlogItem
