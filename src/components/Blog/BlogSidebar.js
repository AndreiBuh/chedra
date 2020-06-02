import React from "react"

import Search from "./Search"
import Categories from "./Categories"

const BlogSidebar = () => {
  return (
    <div className="pl-5">
      <Search />
      <Categories />
    </div>
  )
}

export default BlogSidebar
