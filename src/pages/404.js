import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Banner from "../components/Banner"
import SEO from "../components/SEO"

import styles from "../css/error.module.css"

const error = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <header className={styles.error}>
        <Banner title="Ai gresit pagina">
          <Link fade to="/" className="btn-white">
            Intoarce-te la pagina principala
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
