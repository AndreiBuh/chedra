import React from "react"

import BlogItem from "./BlogItem"

const BlogList = ({ articles }) => {
  return (
    <div className="card-columns">
      {articles.nodes.map(article => {
        return (
          <BlogItem
            key={article.id}
            title={article.title}
            read={article.read}
            date={article.date}
            content={article.content}
            image={article.image}
            slug={article.slug}
          />
        )
      })}
    </div>
  )
}

export default BlogList
