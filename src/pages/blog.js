import React from "react"
import Title from "../components/Title"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import BlogList from "../components/Blog/BlogList"
import BlogSidebar from "../components/Blog/BlogSidebar"

const blog = () => {
  return (
    <Layout>
      <SEO title="Blog" description="Chedra Tax ITP Blog" />
      <div className="container p-3 p-sm-5">
        <Title
          title="Articole"
          subtitle="Blog"
          titleColor="title-black"
          className="my-3 my-sm-5"
        />
        <div className="row">
          <div className="col-sm-8">
            <BlogList />
          </div>
          <div className="col-sm-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default blog
