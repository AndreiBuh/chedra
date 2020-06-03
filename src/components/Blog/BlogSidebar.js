import React from "react"

import Search from "./Search"
import Categories from "./Categories"
import Tags from "./Tags"

const BlogSidebar = () => {
  return (
    <div className="pl-0 pl-sm-5">
      <Search />
      <Categories />
      <Tags />
    </div>
  )
}

export default BlogSidebar
