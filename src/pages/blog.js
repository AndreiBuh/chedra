import React from "react"
import Title from "../components/Title"
import { graphql } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import BlogList from "../components/Blog/BlogList"
import BlogSidebar from "../components/Blog/BlogSidebar"

export const query = graphql`
  {
    articles: allContentfulArticle {
      nodes {
        content {
          json
        }
        id
        title
        slug
        date(formatString: "MMMM DD, YYYY")
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        read
      }
    }
  }
`

const blog = ({ data, pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const customCrumbLabel = location.pathname.replace("/", "")
  return (
    <Layout>
      <SEO title="Blog" description="Chedra Tax ITP Blog" />
      <Breadcrumb
        crumbs={crumbs}
        crumbLabel={customCrumbLabel}
        crumbSeparator=" > "
      />
      <div className="container p-3 p-sm-5">
        <Title
          title="Articole"
          subtitle="Blog"
          titleColor="title-black"
          className="my-3 my-sm-5"
        />
        <div className="row">
          <div className="col-sm-8">
            <BlogList articles={data.articles} />
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
