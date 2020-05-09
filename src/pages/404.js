import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"
import Banner from "../components/Banner"

import styles from "../css/error.module.css"

const error = () => {
  return (
    <Layout>
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
