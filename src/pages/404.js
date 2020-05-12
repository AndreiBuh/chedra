import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"
import Banner from "../components/Banner"
import SEO from "../components/SEO"

import styles from "../css/error.module.css"

const error = () => {
  return (
    <Layout>
      <SEO
        title="Error 404"
        description="Chedra Tax ITP inspectie tehnica periodica Ploiesti"
      />
      <header className={styles.error}>
        <Banner title="Ai gresit pagina">
          <AniLink fade to="/" className="btn-white">
            Intoarce-te la pagina principala
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
