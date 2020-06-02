import React from "react"

import BlogItem from "./BlogItem"

const BlogList = () => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <BlogItem />
      </div>
      <div className="col-sm-6">
        <BlogItem />
      </div>
    </div>
  )
}

export default BlogList
